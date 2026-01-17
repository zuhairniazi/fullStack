import path from 'path';

/**
 * Utility for resolving test-data paths.
 *
 * WHY:
 * - Avoid hardcoded absolute paths
 * - Works consistently across Mac/Linux/CI
 */
export function testDataPath(fileName: string) {
    return path.resolve(__dirname, '..', 'test-data', fileName);
}
