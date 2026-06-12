import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("haushaltsaufloesung")!;

export const Route = createFileRoute("/leistungen/haushaltsaufloesung")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
