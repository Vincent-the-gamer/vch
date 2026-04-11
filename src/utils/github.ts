import { load } from "cheerio/slim";
import axios from "./axios";

export async function getGitHubRepoLatestVersion(author: string, repo: string): Promise<string | null> {
  const { data } = await axios.get(`https://github.com/${author}/${repo}/releases/latest`);

  if (!data) {
    return null
  }

  const $ = load(data);
  const titleText = $('title').text().trim();
  const regex = /\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?/;
  const match = titleText.match(regex);
  const latestVersion = match?.[0] as string;

  return latestVersion;
}