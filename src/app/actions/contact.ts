"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères.")
    .max(100, "Le nom est trop long."),
  email: z.string().email("Adresse email invalide."),
  phone: z.string().max(20).optional().or(z.literal("")),
  type: z.enum(["individuel", "club", "box", "executive", "autre"], {
    errorMap: () => ({ message: "Type de demande invalide." }),
  }),
  message: z
    .string()
    .max(2000, "Le message est trop long (max 2000 caractères).")
    .optional()
    .or(z.literal("")),
});

export type ContactFormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    type: formData.get("type"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors as Record<string, string[]>,
      message: "Veuillez corriger les erreurs ci-dessous.",
    };
  }

  // ─── Send the email ───────────────────────────────────────────
  // TODO: Replace with your email provider (Resend, Formspree, Nodemailer, etc.)
  // Example with Resend:
  //
  // import { Resend } from 'resend';
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'PRofiling <noreply@profiling-nutrition.fr>',
  //   to: 'contact@profiling-sport.com',
  //   subject: `Nouveau contact — ${result.data.type} — ${result.data.name}`,
  //   text: `Nom: ${result.data.name}\nEmail: ${result.data.email}\nTéléphone: ${result.data.phone || 'Non renseigné'}\nType: ${result.data.type}\n\nMessage:\n${result.data.message || 'Aucun message'}`,
  // });

  console.log("📬 Nouvelle demande de contact :", result.data);

  return {
    success: true,
    message: "Votre demande a été envoyée avec succès.",
  };
}
