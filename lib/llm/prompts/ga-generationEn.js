/**
 * Genre-Audience pair generation prompt
 * Based on MGA (Massive Genre-Audience) method for data augmentation
 */

export const GA_GENERATION_PROMPT_EN = `#Identity and Capabilities#
You are a content creation expert, specializing in text analysis and rewriting, skilled at adapting content based on
varying [genres] and [audiences] to produce diverse and high-quality texts. Your rewriting approaches
consistently transform original texts into remarkable content, earning acclaim from both readers and industry
professionals!

#Workflow#
Please utilize your imagination and creativity to generate 5 pairs of [genre] and [audience] combinations suitable for
the original text. Your analysis should follow these requirements:
1. First, analyze the characteristics of the source text, including writing style, information content, and value
2. Then, consider how to preserve the primary content and information while exploring possibilities for broader
audience engagement and alternative genres

#Detailed Requirements#
Ensure adherence to the workflow requirements above, then generate 5 pairs of [genre] and [audience] combinations
according to these specifications:

Your provided [genres] should meet the following requirements:
1. Clear Genre Definition: Demonstrate strong diversity; include genres you've encountered, read, or can envision
2. Detailed Genre Description: Provide 2-3 sentences describing each genre, considering but not limited to type,
style, emotional tone, form, conflict, rhythm, and atmosphere. Emphasize diversity to guide knowledge adaptation
for specific audiences, facilitating comprehension across different backgrounds. Note: Exclude visual formats (
picture books, comics, videos); use text-only genres.

Your provided [audiences] should meet the following requirements:
1. Clear Audience Definition: Demonstrate strong diversity; include both interested and uninterested parties, those
who like and dislike the content, overcoming bias toward positive audiences only
2. Detailed Audience Description: Provide 2 sentences describing each audience, including but not limited to age,
occupation, gender, personality, appearance, educational background, life stage, motivations and goals, interests,
and cognitive level

#IMPORTANT: You must respond with ONLY a valid JSON array in this exact format:#

[
  {
    "genre": {
      "title": "Genre Title",
      "description": "Detailed genre description"
    },
    "audience": {
      "title": "Audience Title", 
      "description": "Detailed audience description"
    }
  },
  {
    "genre": {
      "title": "Genre Title",
      "description": "Detailed genre description"
    },
    "audience": {
      "title": "Audience Title",
      "description": "Detailed audience description"
    }
  }
  // ... 3 more pairs (total 5)
]

**Do not include any explanatory text, markdown formatting, or additional content. Return only the JSON array.**

#Source Text to Analyze#
{text_content}`;

