import { useNavigate } from "react-router-dom"

export const BackButtons = () => {
    const navigate = useNavigate()
    return (
        <><footer className="back-buttons">
            <button onClick={() => navigate(`/AllBrackets`)}>See All Brackets</button>
            <button onClick={() => navigate(`/YourBrackets`)}>See Your Brackets</button>
        </footer>
        </>

    )
}