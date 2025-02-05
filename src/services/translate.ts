import { FromLanguage, Language } from "../types/types"
async function Translate(fromLanguage: FromLanguage, toLanguage: Language, text: string) {
    const information = {
        from: fromLanguage,
        to: toLanguage,
        text
    }
    try {
        const request = await fetch(`https://${import.meta.env.VITE_X_RAPID_HOST}/api/v1/translator/text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-host': `${import.meta.env.VITE_X_RAPID_HOST}`,
                'x-rapidapi-key': `${import.meta.env.VITE_X_RAPID_KEY}`
            },
            body: JSON.stringify(information)
        })
        if (!request.ok) {
            throw new Error(await request.text() || 'We found an error') 
        }
        const response = await request.json()
        return response;
    } catch (error) {
        console.log(error)
        return new Error('We found an error')
    }
}
export { Translate }