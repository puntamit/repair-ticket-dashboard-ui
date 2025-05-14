
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { Wrench } from "lucide-react";

const ticketFormSchema = z.object({
  title: z.string().min(5, {
    message: "ชื่อเรื่องต้องมีความยาวอย่างน้อย 5 ตัวอักษร",
  }),
  description: z.string().min(10, {
    message: "รายละเอียดต้องมีความยาวอย่างน้อย 10 ตัวอักษร",
  }),
  location: z.string().min(3, {
    message: "กรุณาระบุสถานที่",
  }),
  priority: z.enum(["low", "medium", "high"], {
    required_error: "กรุณาเลือกความเร่งด่วน",
  }),
  type: z.enum(["hardware", "software", "network", "other"], {
    required_error: "กรุณาเลือกประเภทปัญหา",
  }),
});

type TicketFormValues = z.infer<typeof ticketFormSchema>;

// This can come from your app's global store or auth context
const defaultValues: Partial<TicketFormValues> = {
  priority: "medium",
};

export function TicketForm() {
  const form = useForm<TicketFormValues>({
    resolver: zodResolver(ticketFormSchema),
    defaultValues,
  });

  function onSubmit(data: TicketFormValues) {
    // Here you would submit to your API
    console.log("Form submitted:", data);
    toast.success("ส่งแจ้งซ่อมเรียบร้อยแล้ว", {
      description: "เจ้าหน้าที่จะดำเนินการตรวจสอบและติดต่อกลับโดยเร็วที่สุด",
    });
    form.reset();
  }

  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">แจ้งซ่อมใหม่</h3>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ชื่อเรื่อง</FormLabel>
                <FormControl>
                  <Input placeholder="เช่น คอมพิวเตอร์ไม่เปิด, เครื่องปรับอากาศไม่เย็น" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ประเภทปัญหา</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกประเภทปัญหา" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="hardware">ฮาร์ดแวร์</SelectItem>
                      <SelectItem value="software">ซอฟต์แวร์</SelectItem>
                      <SelectItem value="network">เครือข่าย</SelectItem>
                      <SelectItem value="other">อื่นๆ</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ความเร่งด่วน</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="เลือกความเร่งด่วน" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">ต่ำ</SelectItem>
                      <SelectItem value="medium">ปานกลาง</SelectItem>
                      <SelectItem value="high">สูง</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>สถานที่</FormLabel>
                <FormControl>
                  <Input placeholder="เช่น อาคาร A ชั้น 2 ห้อง 201" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>รายละเอียด</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="โปรดอธิบายปัญหาที่พบโดยละเอียด..."
                    className="min-h-[120px] resize-y"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full md:w-auto">
            ส่งแจ้งซ่อม
          </Button>
        </form>
      </Form>
    </div>
  );
}
