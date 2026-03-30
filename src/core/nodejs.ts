import { Versions } from "../types";
import axios from "../utils/axios";
import { load } from 'cheerio/slim';

export async function getNodeVersions(): Promise<Versions> {
  const currentVersion = process.version;

  const { data } = await axios.get('https://nodejs.org/zh-cn');
  const $ = load(data);
  const releaseLinks = $('a[href*="release"]');

  const versions: Versions = {
    current: currentVersion,
    latest: '',
    latestLTS: '',
  };

  releaseLinks.each((i, el) => {
    let spanText = $(el).find('span').text().trim();
    if(spanText.includes('LTS')) {
      spanText = spanText.replace('Latest LTS', '').trim();
      versions.latestLTS = spanText;
    } else if(spanText.includes('Release')) {
      spanText = spanText.replace('Latest Release', '').trim();
      versions.latest = spanText;
    }
  });

  return versions;
}