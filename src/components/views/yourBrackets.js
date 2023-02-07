import { Outlet, Route, Routes } from "react-router-dom"
import { NewCompetitors } from "../creationForms/competitorForm"
import { NewBracketForm } from "../creationForms/newBracketForm"
import { TemplateViewer } from "../templates/templateViewer"
import { YourTemplatesListed } from "../templates/yourTemplatesListed"

export const YourBracketsPage = () => {

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


        </Routes>
    )
}
