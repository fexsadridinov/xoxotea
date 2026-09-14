# V2 asset review

The requested Nano Banana Pro model was submitted through Higgsfield; service metadata reports `nano_banana_2`. Every liquid variant references the same base image and uses the user's unchanged base prompt, changing only the liquid description. New working previews are in `public/drinks`; all old imagery was removed.

| Index | Drink | Generation | Observed result |
| --- | --- | --- | --- |
| 0 | Brown sugar | b83a0501-300e-46ed-9c49-5ecd0d16327c | Tall vessel, pearls and condensation; tiny residual lid markings remain uncertain after two corrections. Not certified against the absolute blank-lid gate. |
| 1 | Grape | 6721dbe0-acb4-4c7f-bf2f-4f1f2f1ad8bf | REJECT: framing and shadow differ from base. |
| 2 | Jasmine | 447afe93-e306-44bd-a3c1-a7fe0a5f3de5 | Close match to base; no extra subject. Full set still rejected. |
| 3 | Coconut mango | 9847f187-ccc6-424d-944a-63a36a77bd56 | Close match to base silhouette; slight baseline/framing variation. |
| 4 | Matcha | db8dfca3-23c5-407c-a3d9-d1a22f855b55 | REJECT: framing, lid and lighting differ. |
| 5 | Peach oolong | c779d58f-b5a7-4222-a199-0947a4147736 | REJECT: softbox visible; different silhouette/shadow. |

Turntable: Seedance 2.0 submission rejected before a job was created: `Out of credits on plus (monthly) plan in Private workspace.` No billing error was retried. No 36-frame sequence exists. Continue from these same still IDs after credits become available; do not regenerate successful slots speculatively.

The draft contains no images of people, hands, interiors, storefronts or streets. Historical Git commits remain intact; this statement concerns the current tree.


## Continuation — 14 September 2026

Two focused corrective passes were completed for each of grape, matcha and peach. The final working slots are fc140c57-d9c8-4a55-b549-fc58a247760c, b7360a21-b863-4d6d-b472-338c03edf785 and d0fa48b6-88ba-46eb-8e4e-b84abbf979a9. Exact final prompts and source URLs are recorded in `audit/asset-provenance.json`.

The softbox is removed and all shadows now fall to the right. **The set still FAILS identical-vessel registration:** matcha is wider/larger in frame, peach has a different rim/baseline, grape is warmer and larger than the base. The three improved working previews replace their earlier slots, but none is certified as matching the complete six-cup system. The two-refinement limit in Product Photoshoot has been reached for these slots. Base cup tiny lid markings remain unresolved.

The retry of the turntable request was rejected before a job was created. Seedance 2.5 at 1080p, six seconds, no audio was estimated at 54 credits. The service reported 14 usable credits after the first still correction batch, alongside 100 trial credits that it did not apply to this request. The second still correction batch used another six credits. No retry after that billing rejection and no substituted/fabricated sequence. The empty manifest deliberately selects the static fallback without a 404.
