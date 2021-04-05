import {authenticateMiddleware, sendRequestToLogin} from '../store/authMiddleware';
import {authenticate} from "../store/actions/actions";

jest.mock('../store/authMiddleware', () => ({sendRequestToLogin: jest.fn(() => true)}))

describe("authenticateMiddleware", () => {
    describe("success", () => {
        it("auth true", async () => {
            sendRequestToLogin.mockImplementation(async () => true);
            const dispatch = jest.fn();

            await authenticateMiddleware({ dispatch })()(
                authenticate("email", "password")
            );
            expect(sendRequestToLogin).toBeCalledWith("email", "password");
            expect(dispatch).toBeCalledWith({
                type: "LOG_IN",
            });
        });
    });
    describe("failed", () => {
        it("auth false", async () => {
        sendRequestToLogin.mockImplementation(() => false);
            const dispatch = jest.fn();

            await authenticateMiddleware({ dispatch })()(
                authenticate("email", "password")
            );
            expect(dispatch).not.toBeCalled();
        });
    });
});
