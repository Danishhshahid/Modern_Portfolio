import groq from 'groq';

export const PROJECTS_BY_CATEGORY = (category: 'web' | 'ai' | 'other') => groq`
*[_type == "project" && category == ${JSON.stringify(category)}] | order(order asc){
  _id,
  title,
  description,
  "image": cover.asset->url,
  technologies,
  liveUrl,
  githubUrl
}`;

export const PRESENTATIONS = groq`
*[_type == "presentation"] | order(date desc){
  _id,
  title,
  description,
  link,
  date,
  "image": cover.asset->url
}`;


