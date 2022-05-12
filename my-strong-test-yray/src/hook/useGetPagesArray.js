import { useMemo } from "react"


export const usePostNexPage = (totalPages) => {
    let result = []
    const nexPage = useMemo(() => {
        for (let i = 0; i < totalPages; i++) {
            result.push(i + 1)
        }
        return result
    }, [totalPages])
    return nexPage
}