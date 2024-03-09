import request from "supertest";
import app from "../src/app"; // Assuming your app file is named app.ts
jest.mock("mongoose");
describe("Test Express App", () => {
  it('responds with "Welcome to Ts" when hitting root route', async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Welcome to Ts");
  });

  // Add more test cases as needed
});
