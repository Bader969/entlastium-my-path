import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("gartenraeumung")!;

export const Route = createFileRoute("/leistungen/gartenraeumung")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
