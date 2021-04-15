import {recordSaga} from "./helperSaga";
import {authenticateSaga, getAddressesListSaga, profileSaga, routeSaga} from "../store/sagas";
import {authenticate, profileAction, routesAction, setAddress} from "../store/actions/actions";

jest.mock("./api", () => ({serverLogin: jest.fn(() => true)}))


describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticate true", async () => {
            const dispatched = await recordSaga(authenticateSaga(),
                authenticate("email", "password")
            )
            expect(dispatched).toEqual([{type: "LOGIN_ACTION"}])

        })
    })
})

describe("addressListSaga", () => {
    describe("#GET_POINTS", () => {
        it("can get points from server", async () => {
            const dispatched = await recordSaga(getAddressesListSaga(),
                setAddress("to", "from")
            )
            expect(dispatched).toEqual([{type: "ADDRESS"}])

        })
    })
})


describe("profileSaga", () => {
    describe("#SAVE_PROFILE", () => {
        it("user can save profile info", async () => {
            const dispatched = await recordSaga(profileSaga(),
                profileAction({})
            )
            expect(dispatched).toEqual([{type: "SET_PROFILE"}])

        })
    })
})


describe("routeSaga", () => {
    describe("#SAVE_PROFILE", () => {
        it("user can get routes from server", async () => {
            const dispatched = await recordSaga(routeSaga(),
                routesAction({})
            )
            expect(dispatched).toEqual([{type: "SET_ROUTES"}])

        })
    })
})


