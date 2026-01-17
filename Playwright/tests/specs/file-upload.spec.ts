import path from 'path';
import { test } from '../fixtures/test';
import { testDataPath } from '../utils/paths';

/**
 * Spec files describe TEST INTENT.
 * They should read like documentation.
 */
test('upload a file', async ({ fileUpload }) => {
    await test.step('navigate to upload page', async () => {
        await fileUpload.goto();
    });

    const filePath = testDataPath('sample-upload.txt');
    const fileName = path.basename(filePath);

    await test.step('upload the file', async () => {
        await fileUpload.uploadFile(filePath);
    });

    await test.step('verify uploaded file name', async () => {
        await fileUpload.expectUploadedFileName(fileName);
    });
});
