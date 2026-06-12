import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("wohnungsuebergabe")!;

export const Route = createFileRoute("/leistungen/wohnungsuebergabe")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
