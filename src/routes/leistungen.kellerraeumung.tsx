import { createFileRoute } from "@tanstack/react-router";
import { ServicePage, buildServiceHead } from "@/components/ServicePage";
import { getServiceBySlug } from "@/data/services";

const service = getServiceBySlug("kellerraeumung")!;

export const Route = createFileRoute("/leistungen/kellerraeumung")({
  head: () => buildServiceHead(service),
  component: () => <ServicePage service={service} />,
});
