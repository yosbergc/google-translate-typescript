import { FromLanguage, Language } from "../types/types"
async function Translate(fromLanguage: FromLanguage, toLanguage: Language, text: string) {
    const information = {
        from: fromLanguage,
        to: toLanguage,
        text
    }
    try {
        const request = await fetch(`${import.meta.env.X_RAPID_HOST}/api/v1/translator/text`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-rapidapi-key': `${import.meta.env.X_RAPID_KEY}`
            },
            body: JSON.stringify(information)
        })
        if (!request.ok) {
            throw new Error(await request.text() || 'We found an error') 
        }
        const response = await request.json()
        return response;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new Error('We found an error')
    }
}
export { Translate }