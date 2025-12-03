import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

// Enhance Professional Summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent)
      return res.status(400).json({ message: "Missing required fields" });

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are expert in resume writing. Enhance the professional summary in 3-4 sentences, highlight key skills, experience and career objectives. Make it ATS-friendly. Return only the improved text.",
        },
        { role: "user", content: userContent },
      ],
    });

    const enhancedContent = response.choices[0]?.message?.content || "";
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Enhance Job Description
// POST: /api/ai/enhance-job-desc
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;
    if (!userContent)
      return res.status(400).json({ message: "Missing required fields" });

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        {
          role: "system",
          content:
            "You are an expert in resume writing. Enhance this job description into 3-4 sentences, using action verbs & quantifiable achievements. ATS-friendly. Return only the text.",
        },
        { role: "user", content: userContent },
      ],
    });

    const enhancedContent = response.choices[0]?.message?.content || "";
    return res.status(200).json({ enhancedContent });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// Upload Resume
// POST: /api/ai/upload-resume
export const uploadResume = async (req, res) => {
  try {
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!resumeText)
      return res.status(400).json({ message: "Missing required fields" });

    const systemPrompt =
      "You are an expert AI agent that extracts structured, clean, ATS-ready resume data. Always return VALID JSON only, with no explanation.";

    const userPrompt = `Extract structured data from the following resume text:
    ${resumeText}

    Return the result as a VALID JSON object ONLY, with NO explanation or text outside the JSON.

    Use this exact format:

    {
    "professional_summary": "",
    "skills": [],
    "personal_info": {
        "image": "",
        "full_name": "",
        "profession": "",
        "email": "",
        "phone": "",
        "location": "",
        "linkedin": "",
        "website": ""
    },
    "experience": [
        {
        "company": "",
        "position": "",
        "start_date": "",
        "end_date": "",
        "description": "",
        "is_current": false
        }
    ],
    "projects": [
        {
        "name": "",
        "type": "",
        "description": ""
        }
    ],
    "education": [
        {
        "institution": "",
        "degree": "",
        "field": "",
        "graduation_date": "",
        "gpa": ""
        }
    ]
    }
    `;

    const response = await ai.chat.completions.create({
      model: process.env.OPENAI_MODEL,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      response_format: { type: "json_object" },
    });

    const extractedData = response.choices[0]?.message?.content || "{}";

    let parsedData;
    try {
      parsedData = JSON.parse(extractedData);
    } catch (jsonErr) {
      return res.status(500).json({
        message: "Failed to parse extracted resume data",
        error: jsonErr.message,
      });
    }

    const newResume = await Resume.create({
      userId,
      title: title || "Untitled Resume",
      ...parsedData,
    });

    return res.json({ resumeId: newResume._id });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
