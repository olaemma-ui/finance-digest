import { TextEncoder, TextDecoder } from "util";
global.TextEncoder = TextEncoder as typeof global.TextEncoder;
global.TextDecoder = TextDecoder as typeof global.TextDecoder;

import "whatwg-fetch";
import "@testing-library/jest-dom";
import { server } from "@/test/msw/server";


beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
