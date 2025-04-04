import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <Card>
        <h1 className="text-2xl font-bold mb-4">Chatbot ITR Filing</h1>
        <Input placeholder="Enter your name" className="mb-4" />
        <Button>Submit</Button>
      </Card>
    </main>
  )
}