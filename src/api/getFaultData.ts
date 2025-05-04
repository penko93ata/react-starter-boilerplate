import { queryOptions } from "@tanstack/react-query";

export const getFaultData = queryOptions({
    queryKey: ["GET_FAULT_DATA"],
    queryFn: async () => {
        const data = await (await fetch("http://localhost:7000/data")).json();
        return data;
    },
});
