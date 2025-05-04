import { useEffect } from "react";
import { useQueryErrorResetBoundary, useSuspenseQuery } from "@tanstack/react-query";
import { createFileRoute, ErrorComponentProps, useRouter } from "@tanstack/react-router";

import { getFaultData } from "@/api/getFaultData";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/fault")({
    component: FaultComponent,
    errorComponent: Error,
});

function FaultComponent() {
    const { data } = useSuspenseQuery(getFaultData);
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

function Error({ reset }: ErrorComponentProps) {
    const router = useRouter();

    const queryErrorResetBoundary = useQueryErrorResetBoundary();

    useEffect(() => {
        queryErrorResetBoundary.reset();
    }, [queryErrorResetBoundary]);

    return (
        <Button
            onClick={() => {
                reset();
                router.invalidate();
            }}
        >
            Go back
        </Button>
    );
}
