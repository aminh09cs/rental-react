import { useEffect, useState } from "react";
import { Modal } from "../ui/Modal";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

interface SignInProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignIn = ({ isOpen, onClose }: SignInProps) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({ email: "", password: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Form submitted with data:");
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    console.log("ok nene");
  }, [isOpen]);
  if (!isMounted) return null;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <p className="text-[40px] text-[#141416] font-bold ">
          Sign In on Fleet
        </p>
        <Input
          label="Email"
          id="email"
          type="email"
          error={error.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <Input
          label="Password"
          id="password"
          type="password"
          error={error.password}
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        <Button
          label="Sign In"
          className="!text-[#ffffff] !bg-[#23262F] hover:none"
          type="submit"
        />
      </form>
    </Modal>
  );
};
