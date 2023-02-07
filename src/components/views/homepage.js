import { Outlet, Route, Routes } from "react-router-dom"
import { NewCompetitors } from "../creationForms/competitorForm"
import { NewBracketForm } from "../creationForms/newBracketForm"
import { AllTemplatesListed } from "../templates/allViewer"
import { TemplateViewer } from "../templates/templateViewer"
import { YourTemplatesListed } from "../templates/yourTemplatesListed"

export const HomePage = () => {

    return (
        <Routes>
            <Route path="/YourBrackets" element={
                <>
                    <h1>Your Brackets</h1>
                    <YourTemplatesListed />
                    <Outlet />
                </>
            }>
            </Route>
            <Route path="/brackets/:bracketId" element={<TemplateViewer />} />
            <Route path="/CreateNewBracket" element={<NewBracketForm />} />
            <Route path="/NewCompetitors/:bracketId" element={<NewCompetitors />} />
            <Route path="/AllBrackets" element={<AllTemplatesListed />} />
        </Routes>
    )
}
