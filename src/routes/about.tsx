import { createFileRoute } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
    component: About,
});

function About() {
    return (
        <>
            <div className="p-2">Hello from About!</div>
            <Button>Click me</Button>
        </>
    );
}
