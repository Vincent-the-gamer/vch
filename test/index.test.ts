import { test, expect } from "vitest"
import { getNodeVersions } from "../src/core/nodejs"

test("check node versions", async () => {
    const versions = await getNodeVersions();
    expect(versions).toBeDefined();
    expect(versions.current).toBe(process.version);
    expect(versions.latest).toBeDefined();
    console.log(versions)
})