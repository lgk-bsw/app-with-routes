import { Layout, SidebarMenu, MenuItem } from "blue-react"
import {
    List,
    House,
    HouseFill,
    XCircleFill,
    InfoCircleFill,
    CheckCircleFill,
    ExclamationCircleFill
} from "react-bootstrap-icons"
import Router from "./blue-react/Router"

import HomePage from "./pages/HomePage"
import SecondPage from "./pages/SecondPage"

import "./styles/main.scss"

export default function App() {
    return (
        <Layout
            expandSidebar
            sidebarToggleIconComponent={<List />}
            statusIcons={{
                danger: <XCircleFill />,
                info: <InfoCircleFill />,
                success: <CheckCircleFill />,
                warning: <ExclamationCircleFill />
            }}
        >
            <SidebarMenu>
                <MenuItem href="#/home" icon={<House />} iconForActive={<HouseFill />} label="Home" isHome />
                <MenuItem href="#/second-page" icon={<House />} iconForActive={<HouseFill />} label="Second" />
                <MenuItem href="#/second-page/John" icon={<House />} iconForActive={<HouseFill />} label="With param" />
                <MenuItem
                    href={`#/second-page/${encodeURIComponent(JSON.stringify({ automatic: "decoding" }))}`}
                    icon={<House />}
                    iconForActive={<HouseFill />}
                    label="With complex param"
                />
            </SidebarMenu>

            <Router
                routes={[
                    {
                        name: "home",
                        component: <HomePage />
                    },
                    {
                        name: "second-page",
                        component: <SecondPage />
                    }
                ]}
            />
        </Layout>
    )
}
