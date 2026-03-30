import { test, expect } from "vitest"
import { getNodeVersions } from "../src/core/nodejs"
import { exec } from "child_process"

test("check node versions", async () => {
    const versions = await getNodeVersions();
    expect(versions).toBeDefined();
    expect(versions.current).toBe(process.version);
    expect(versions.latest).toBeDefined();
    console.log(versions)
})

test("command not found", async () => {
    const result: Record<string, any> = await new Promise((resolve, reject) => {
      exec("yuanshen", (error, stdout, stderr) => {
        resolve({
          error,
          stdout,
          stderr,
        });
      });
    });
    expect(result.error).toBeDefined();
    expect(result.stdout).toBeDefined();
  expect(result.stderr).toBeDefined();
  console.log(result)
})