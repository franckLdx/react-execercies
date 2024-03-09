import { useQuery, useQueryClient } from "react-query"

export const useCreditCardBin = (cardNumber: string): string | undefined => cardNumber.length < 6 ? undefined : cardNumber.slice(0, 8)

const creditCardBrandKey = "CreditCardBrand"

const creditCardBrand = async (creditCardBin: string): Promise<string> => {
  var headers = new Headers();
  headers.append("Content-Type", "application/json");
  const params = new URLSearchParams({ 'bin': creditCardBin }).toString();
  const response = await fetch(
    `/creditCard/brand?${params}`,
    { headers }
  )
  if (!response.ok) {
    throw new Error('Unexpected error')
  }
  return response.json()
}

export const useCancelGetCreditCardBrand = () => {
  const queryClient = useQueryClient()
  queryClient.cancelQueries(creditCardBrandKey)
}

export const useGetCreditCardBrand = (creditCardBin: string | undefined) => useQuery(
  [creditCardBrandKey, creditCardBin],
  async () => creditCardBrand(creditCardBin!),
  {
    enabled: creditCardBin !== undefined,
  }
)
