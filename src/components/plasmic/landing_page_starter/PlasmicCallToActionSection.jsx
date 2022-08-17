// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i1R9JuZcEVnjtzkqUFoFHH
// Component: FgE3zW1qUNYrNb
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: P_arPT46Us9VtF/component
import { useScreenVariants as useScreenVariantsmcpPndYlKly8 } from "./PlasmicGlobalVariant__Screen" // plasmic-import: -mcpPnd-YLKly8/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: i1R9JuZcEVnjtzkqUFoFHH/projectcss
import * as sty from "./PlasmicCallToActionSection.module.css" // plasmic-import: FgE3zW1qUNYrNb/css
import ChevronRightIcon from "./icons/PlasmicIcon__ChevronRight" // plasmic-import: jkIxSgiWqRDVZL/icon
import meetingToTa4YKu5H53Ii from "./images/meeting.jpeg" // plasmic-import: toTa4yKu5h53ii/picture

export const PlasmicCallToActionSection__VariantProps = new Array()

export const PlasmicCallToActionSection__ArgProps = new Array(
  "image",
  "children"
)

function PlasmicCallToActionSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          image: {
            src: meetingToTa4YKu5H53Ii,
            fullWidth: 2916,
            fullHeight: 1787,
            aspectRatio: undefined,
          },
        },

        props.args
      ),

    [props.args]
  )

  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmcpPndYlKly8(),
  })

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div className={classNames(projectcss.all, sty.freeBox__gnJl0)}>
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(projectcss.all, sty.art)}
        >
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"none"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            src={args.image}
          />

          {true ? (
            <div
              data-plasmic-name={"blend"}
              data-plasmic-override={overrides.blend}
              className={classNames(projectcss.all, sty.blend)}
            />
          ) : null}
        </div>

        <div className={classNames(projectcss.all, sty.freeBox__nzor)}>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___4GxXj)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"copy"}
              data-plasmic-override={overrides.copy}
              hasGap={true}
              className={classNames(projectcss.all, sty.copy)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(projectcss.all, sty.freeBox__r1VAl)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__st05S
                        )}
                      >
                        {"Welcome"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__qQzYc
                        )}
                      >
                        {"Let's get going"}
                      </div>

                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__artzP
                        )}
                      >
                        {
                          "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                        }
                      </div>
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        projectcss.all,
                        sty.freeBox___0FLXz
                      )}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__v4Wcn
                        )}
                        color={"blue"}
                        endIcon={
                          <ChevronRightIcon
                            className={classNames(
                              projectcss.all,
                              sty.svg__hafCz
                            )}
                            role={"img"}
                          />
                        }
                        showEndIcon={true}
                      >
                        {"Start now"}
                      </Button>

                      <Button
                        bgDifference={true}
                        className={classNames(
                          "__wab_instance",
                          sty.button__eAwec
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__xNmz
                          )}
                        >
                          {"Learn more…"}
                        </div>
                      </Button>
                    </p.Stack>
                  </React.Fragment>
                ),

                value: args.children,
              })}
            </p.Stack>
          </p.Stack>
        </div>
      </div>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "art", "img", "blend", "copy"],
  art: ["art", "img", "blend"],
  img: ["img"],
  blend: ["blend"],
  copy: ["copy"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicCallToActionSection__ArgProps,
          internalVariantPropNames: PlasmicCallToActionSection__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicCallToActionSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection"
  } else {
    func.displayName = `PlasmicCallToActionSection.${nodeName}`
  }
  return func
}

export const PlasmicCallToActionSection = Object.assign(
  // Top-level PlasmicCallToActionSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    art: makeNodeComponent("art"),
    img: makeNodeComponent("img"),
    blend: makeNodeComponent("blend"),
    copy: makeNodeComponent("copy"),
    // Metadata about props expected for PlasmicCallToActionSection
    internalVariantProps: PlasmicCallToActionSection__VariantProps,
    internalArgProps: PlasmicCallToActionSection__ArgProps,
  }
)

export default PlasmicCallToActionSection
/* prettier-ignore-end */