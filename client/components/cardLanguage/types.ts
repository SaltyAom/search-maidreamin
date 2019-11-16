export default interface ILanguageProps {
    language: string,
    name: string,
    onClick: (language?: string | null) => any
}