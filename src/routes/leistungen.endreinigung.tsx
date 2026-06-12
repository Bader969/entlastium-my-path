import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("endreinigung")!;

export const Route = createFileRoute("/leistungen/endreinigung")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
