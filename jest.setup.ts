import "@testing-library/jest-dom";
import { server } from "./src/test/msw/server";   // ← create in step 4
import { afterEach } from "node:test";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
