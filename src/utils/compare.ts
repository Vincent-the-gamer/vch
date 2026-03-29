/**
 * Compare two version strings.
 * @param version1 - Support：v1.2.3 or 1.2.3
 * @param version2 - Support：v1.2.3 or 1.2.3
 * @returns 1: version1 > version2, 0: version1 = version2, -1: version1 < version2
 */
export function compareVersions(version1: string, version2: string): number {
  const normalize = (version: string): number[] => {
    return version
      .replace(/^v/, '')
      .split('.')
      .map(part => parseInt(part, 10));
  };

  const v1Parts = normalize(version1);
  const v2Parts = normalize(version2);

  const maxLength = Math.max(v1Parts.length, v2Parts.length);

  for (let i = 0; i < maxLength; i++) {
    const num1 = i < v1Parts.length ? v1Parts[i] : 0;
    const num2 = i < v2Parts.length ? v2Parts[i] : 0;

    if (num1 > num2) return 1;
    if (num1 < num2) return -1;
  }

  return 0;
}