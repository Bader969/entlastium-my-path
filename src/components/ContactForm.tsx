import { useState, useRef } from "react";
import { Send, Phone, Mail, MapPin, Clock, CheckCircle, Upload, X, Image, Loader2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [images, setImages] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    roomSizeM2: "",
    roomSizeM3: "",
    address: "",
    message: "",
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles = Array.from(files).slice(0, 5 - images.length);
    const newPreviews: string[] = [];

    newFiles.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviews.push(reader.result as string);
          if (newPreviews.length === newFiles.length) {
            setImagePreviews((prev) => [...prev, ...newPreviews]);
          }
        };
        reader.readAsDataURL(file);
      }
    });

    setImages((prev) => [...prev, ...newFiles]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const roomTypes = [
    { value: "wohnung", label: "Wohnung" },
    { value: "haus", label: "Haus" },
    { value: "keller", label: "Keller" },
    { value: "dachboden", label: "Dachboden" },
    { value: "garage", label: "Garage" },
    { value: "garten", label: "Garten" },
    { value: "zimmer", label: "Einzelnes Zimmer" },
    { value: "gewerbe", label: "Gewerberäume" },
    { value: "andere", label: "Andere" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.roomType) {
      toast({
        title: "Bitte wählen Sie eine Raumart aus",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    try {
      const roomTypeLabel = roomTypes.find(t => t.value === formData.roomType)?.label || formData.roomType;

      // Build a mailto: link as a backend-free fallback
      const subject = `Neue Anfrage von ${formData.name}`;
      const bodyLines = [
        `Name: ${formData.name}`,
        `E-Mail: ${formData.email}`,
        formData.phone ? `Telefon: ${formData.phone}` : null,
        `Raumart: ${roomTypeLabel}`,
        `Größe (m²): ${formData.roomSizeM2}`,
        formData.roomSizeM3 ? `Größe (m³): ${formData.roomSizeM3}` : null,
        formData.address ? `Adresse: ${formData.address}` : null,
        "",
        "Nachricht:",
        formData.message || "(keine)",
        images.length > 0 ? `\nHinweis: ${images.length} Bild(er) ausgewählt – bitte separat per E-Mail anhängen.` : null,
      ].filter(Boolean).join("\n");

      const mailto = `mailto:info@entlastium.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines)}`;
      window.location.href = mailto;

      toast({
        title: "E-Mail-Programm geöffnet",
        description: "Bitte schließen Sie das Senden in Ihrem E-Mail-Programm ab.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
        roomSizeM2: "",
        roomSizeM3: "",
        address: "",
        message: "",
      });
      setImages([]);
      setImagePreviews([]);
      setPrivacyAccepted(false);
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Fehler beim Senden",
        description: error instanceof Error ? error.message : "Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "+49 123 456 78", href: "tel:+4912345678" },
    { icon: Mail, label: "E-Mail", value: "info@entlastium.de", href: "mailto:info@entlastium.de" },
    { icon: MapPin, label: "Einsatzgebiet", value: "Bochum & ganz NRW", href: null },
    { icon: Clock, label: "Erreichbar", value: "Mo-Fr 8:00-18:00", href: null },
  ];

  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Info */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-semibold mb-6">
              Kontakt aufnehmen
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Lassen Sie uns beim <span className="text-accent">Neuanfang</span> helfen
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Fordern Sie jetzt Ihr kostenloses und unverbindliches Angebot an. 
              Wir kommen auch gerne vorbei, um Aufwand und Kosten vor Ort zu schätzen.
            </p>

            {/* Free Inspection Badge */}
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-accent/20 border border-accent/30 mb-8">
              <CheckCircle className="h-8 w-8 text-accent flex-shrink-0" />
              <div>
                <p className="font-semibold text-primary-foreground">Kostenlose Besichtigung</p>
                <p className="text-sm text-primary-foreground/70">Vor-Ort-Termin ohne Verpflichtung</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <info.icon className="h-5 w-5 text-secondary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-primary-foreground/60 uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-medium text-primary-foreground hover:text-accent transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-primary-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <Card className="border-0 shadow-custom-lg">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Ihr Name *</Label>
                  <Input
                    id="name"
                    placeholder="Max Mustermann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="max@beispiel.de"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+49 123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Room Type & Size m² */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="roomType">Art des Raumes *</Label>
                    <Select
                      value={formData.roomType}
                      onValueChange={(value) => setFormData({ ...formData, roomType: value })}
                    >
                      <SelectTrigger id="roomType">
                        <SelectValue placeholder="Auswählen..." />
                      </SelectTrigger>
                      <SelectContent>
                        {roomTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="roomSizeM2">Größe des Raumes in m² *</Label>
                    <Input
                      id="roomSizeM2"
                      type="number"
                      placeholder="z.B. 25"
                      min="1"
                      value={formData.roomSizeM2}
                      onChange={(e) => setFormData({ ...formData, roomSizeM2: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Size m³ (optional) */}
                <div className="space-y-2">
                  <Label htmlFor="roomSizeM3">Größe in m³ (optional, geschätzt)</Label>
                  <Input
                    id="roomSizeM3"
                    type="number"
                    placeholder="z.B. 50"
                    min="1"
                    value={formData.roomSizeM3}
                    onChange={(e) => setFormData({ ...formData, roomSizeM3: e.target.value })}
                  />
                </div>

                {/* Address */}
                <div className="space-y-2">
                  <Label htmlFor="address">Adresse / PLZ</Label>
                  <Input
                    id="address"
                    placeholder="Straße, PLZ Ort"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Ihre Nachricht</Label>
                  <Textarea
                    id="message"
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label>Bilder hochladen (optional, max. 5)</Label>
                  <div 
                    className="border-2 border-dashed border-muted-foreground/30 rounded-xl p-6 text-center cursor-pointer hover:border-secondary/50 transition-colors"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleImageUpload}
                      disabled={images.length >= 5}
                    />
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Klicken oder Bilder hierher ziehen
                    </p>
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      JPG, PNG bis 10 MB
                    </p>
                  </div>
                  
                  {/* Image Previews */}
                  {imagePreviews.length > 0 && (
                    <div className="flex flex-wrap gap-3 mt-3">
                      {imagePreviews.map((preview, index) => (
                        <div key={index} className="relative group">
                          <div className="w-20 h-20 rounded-lg overflow-hidden border border-border">
                            <img 
                              src={preview} 
                              alt={`Vorschau ${index + 1}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Privacy Checkbox */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="privacy"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                    className="mt-0.5"
                    required
                  />
                  <Label 
                    htmlFor="privacy" 
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    Ich habe die{" "}
                    <Link 
                      to="/datenschutz" 
                      className="text-primary hover:underline font-medium"
                      target="_blank"
                    >
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </Label>
                </div>

                {/* Submit */}
                <Button 
                  type="submit" 
                  variant="accent" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting || !privacyAccepted}
                >
                  {isSubmitting ? (
                    "Wird gesendet..."
                  ) : (
                    <>
                      Jetzt Kontakt aufnehmen
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
