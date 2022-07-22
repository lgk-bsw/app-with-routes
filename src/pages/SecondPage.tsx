import { Page, Header, HeaderTitle, Body } from "blue-react"
import { useMatch } from "../blue-react/Router"

import { appLogo, appTitle, getPhrase } from "../shared"

export default function SecondPage() {
    const match = useMatch()
    const [routeName, name] = match

    const changeMatch = (value: string) => {
        window.location.href = `#/${routeName}/${encodeURIComponent(value)}`
    }

    return (
        <Page>
            <Header>
                <HeaderTitle logo={appLogo} appTitle={appTitle}>
                    {getPhrase("HELLO_WORLD")}
                </HeaderTitle>
            </Header>

            <Body containerClass="container">
                <h1>Hey there, {name}!</h1>

                <h2>The hash as state</h2>
                <select className="form-select" value={name} onChange={({ target }) => changeMatch(target.value)}>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                    <option>Four</option>
                </select>
            </Body>
        </Page>
    )
}
