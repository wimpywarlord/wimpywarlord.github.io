import { useAtom } from "jotai"
import { atomWithStorage } from "jotai/utils"

const pumbaFollowerVisibilityAtom = atomWithStorage<boolean>(
  "pumba-follower-visible",
  true
)

export function usePumbaFollowerVisibility() {
  return useAtom(pumbaFollowerVisibilityAtom)
}
