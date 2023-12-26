
import MyToast from "../islands/MyToast.tsx"
import TestToast from "../islands/TestToast.tsx"

export default function Home() {
  return (
    <div class="px-4 py-8 mx-auto">
      <p>Test of Sonner with Fresh</p>
        <MyToast />
        <TestToast />
    </div>
  );
}
