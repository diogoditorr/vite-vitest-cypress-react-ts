import { useReducer, useState } from "react";
import axios from "axios";

type GreetingState = {
    greeting?: string | null;
    error?: unknown;
};

const initialState = {
    error: null,
    greeting: null,
};

type GreetingAction = "SUCCESS" | "ERROR";

function greetingReducer(
    state: GreetingState,
    action: { type: GreetingAction } & GreetingState
) {
    switch (action.type) {
        case "SUCCESS": {
            return {
                error: null,
                greeting: action.greeting,
            };
        }
        case "ERROR": {
            return {
                error: action.error,
                greeting: null,
            };
        }
        default: {
            return state;
        }
    }
}

interface FetchProps {
    url: string;
}

export function Fetch({ url }: FetchProps) {
    const [{ error, greeting }, dispatch] = useReducer(
        greetingReducer,
        initialState
    );
    const [buttonClicked, setButtonClicked] = useState(false);

    async function fetchGreeting(url: string) {
        try {
            const response = await axios.get(url);
            const { greeting } = response.data;

            dispatch({ type: "SUCCESS", greeting });
            setButtonClicked(true);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                dispatch({ type: "ERROR", error: error });
            }
        }
    }

    return (
        <div>
            <button
                type="button"
                onClick={() => fetchGreeting(url)}
                disabled={buttonClicked}
            >
                {buttonClicked ? "Ok" : "Load Greeting"}
            </button>
            {greeting && <h1>{greeting}</h1>}
            {!!error && <p role="alert">Oops, failed to fetch!</p>}
        </div>
    );
}
