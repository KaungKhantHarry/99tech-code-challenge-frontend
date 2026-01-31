import { sum_to_n_a, sum_to_n_b, sum_to_n_c } from "@/lib/problem1/sumToN";

const TEST_VALUE = 5;

export default function Problem1() {
  return (
    <section className="border rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-semibold">
        Problem 1: Three ways to sum to n
      </h2>

      <ul className="text-sm space-y-2">
        <li>sum_to_n_a({TEST_VALUE}) = {sum_to_n_a(TEST_VALUE)}</li>
        <li>sum_to_n_b({TEST_VALUE}) = {sum_to_n_b(TEST_VALUE)}</li>
        <li>sum_to_n_c({TEST_VALUE}) = {sum_to_n_c(TEST_VALUE)}</li>
      </ul>
    </section>
  )
}
