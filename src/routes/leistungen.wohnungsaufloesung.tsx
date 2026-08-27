import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("wohnungsaufloesung")!;

export const Route = createFileRoute("/leistungen/wohnungsaufloesung")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
