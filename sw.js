if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let t={};const r=s=>l(s,a),u={module:{uri:a},exports:t,require:r};e[a]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),t)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.f3e873a6.js",revision:null},{url:"assets/404.md.f3e873a6.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.cc15b763.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.cc15b763.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.0b319842.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.0b319842.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.b483aeb5.js",revision:null},{url:"assets/animation-controllers_death-commands.md.b483aeb5.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.fd529b6e.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.fd529b6e.lean.js",revision:null},{url:"assets/animation-controllers_index.md.23ab43a6.js",revision:null},{url:"assets/animation-controllers_index.md.23ab43a6.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.e7b6b92b.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.e7b6b92b.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.da6f8229.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.da6f8229.lean.js",revision:null},{url:"assets/app.af294a66.js",revision:null},{url:"assets/blocks_applying-effects.md.bcadfbfe.js",revision:null},{url:"assets/blocks_applying-effects.md.bcadfbfe.lean.js",revision:null},{url:"assets/blocks_block-materials.md.537fbbf7.js",revision:null},{url:"assets/blocks_block-materials.md.537fbbf7.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.f23ba9cb.js",revision:null},{url:"assets/blocks_block-shapes.md.f23ba9cb.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.af073b34.js",revision:null},{url:"assets/blocks_block-sounds.md.af073b34.lean.js",revision:null},{url:"assets/blocks_block-tags.md.791aaa1d.js",revision:null},{url:"assets/blocks_block-tags.md.791aaa1d.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.b65d9588.js",revision:null},{url:"assets/blocks_block-texture-variation.md.b65d9588.lean.js",revision:null},{url:"assets/blocks_blocks-experimental.md.c0995e9a.js",revision:null},{url:"assets/blocks_blocks-experimental.md.c0995e9a.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.b02ac12e.js",revision:null},{url:"assets/blocks_blocks-intro.md.b02ac12e.lean.js",revision:null},{url:"assets/blocks_blocks-stable.md.8a0f3312.js",revision:null},{url:"assets/blocks_blocks-stable.md.8a0f3312.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.40840233.js",revision:null},{url:"assets/blocks_custom-crops.md.40840233.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.dec1789d.js",revision:null},{url:"assets/blocks_custom-fluids.md.dec1789d.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.025173ec.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.025173ec.lean.js",revision:null},{url:"assets/blocks_custom-trees.md.24fbc87c.js",revision:null},{url:"assets/blocks_custom-trees.md.24fbc87c.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.f03d1676.js",revision:null},{url:"assets/blocks_fake-blocks.md.f03d1676.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.e7698577.js",revision:null},{url:"assets/blocks_flipbook-textures.md.e7698577.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.e4185f66.js",revision:null},{url:"assets/blocks_head-like-rotation.md.e4185f66.lean.js",revision:null},{url:"assets/blocks_index.md.6e034d6f.js",revision:null},{url:"assets/blocks_index.md.6e034d6f.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1362150c.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.1362150c.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.d9c35b8a.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.d9c35b8a.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.609a5528.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.609a5528.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.0051a024.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.0051a024.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.19736c98.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.d5dfd7d3.js",revision:null},{url:"assets/chunks/gametick.8221204e.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.717841fb.js",revision:null},{url:"assets/commands_block-states.md.717841fb.lean.js",revision:null},{url:"assets/commands_damage.md.6dc203d9.js",revision:null},{url:"assets/commands_damage.md.6dc203d9.lean.js",revision:null},{url:"assets/commands_entity-counter.md.e1ebad7a.js",revision:null},{url:"assets/commands_entity-counter.md.e1ebad7a.lean.js",revision:null},{url:"assets/commands_index.md.c52182bd.js",revision:null},{url:"assets/commands_index.md.c52182bd.lean.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.e9838180.js",revision:null},{url:"assets/commands_intro-to-command-blocks.md.e9838180.lean.js",revision:null},{url:"assets/commands_mcfunctions.md.e6966f57.js",revision:null},{url:"assets/commands_mcfunctions.md.e6966f57.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.b550bc93.js",revision:null},{url:"assets/commands_nbt-commands.md.b550bc93.lean.js",revision:null},{url:"assets/commands_new-execute.md.69a62810.js",revision:null},{url:"assets/commands_new-execute.md.69a62810.lean.js",revision:null},{url:"assets/commands_on-first-join.md.d93916bc.js",revision:null},{url:"assets/commands_on-first-join.md.d93916bc.lean.js",revision:null},{url:"assets/commands_on-first-world-load.md.e2bd655e.js",revision:null},{url:"assets/commands_on-first-world-load.md.e2bd655e.lean.js",revision:null},{url:"assets/commands_on-player-death.md.3fe308c8.js",revision:null},{url:"assets/commands_on-player-death.md.3fe308c8.lean.js",revision:null},{url:"assets/commands_on-player-join.md.d9187460.js",revision:null},{url:"assets/commands_on-player-join.md.d9187460.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.81034a64.js",revision:null},{url:"assets/commands_on-player-leave.md.81034a64.lean.js",revision:null},{url:"assets/commands_on-player-respawn.md.daeef786.js",revision:null},{url:"assets/commands_on-player-respawn.md.daeef786.lean.js",revision:null},{url:"assets/commands_playsound.md.1e18a5ae.js",revision:null},{url:"assets/commands_playsound.md.1e18a5ae.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.49c187d9.js",revision:null},{url:"assets/commands_relative-coordinates.md.49c187d9.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.6e70f417.js",revision:null},{url:"assets/commands_scoreboard-operations.md.6e70f417.lean.js",revision:null},{url:"assets/commands_scoreboard-timers.md.f6ca7c59.js",revision:null},{url:"assets/commands_scoreboard-timers.md.f6ca7c59.lean.js",revision:null},{url:"assets/commands_selectors.md.a181a172.js",revision:null},{url:"assets/commands_selectors.md.a181a172.lean.js",revision:null},{url:"assets/commands_tellraw.md.e0757315.js",revision:null},{url:"assets/commands_tellraw.md.e0757315.lean.js",revision:null},{url:"assets/concepts_contents.md.0145e69f.js",revision:null},{url:"assets/concepts_contents.md.0145e69f.lean.js",revision:null},{url:"assets/concepts_emojis.md.c707dabb.js",revision:null},{url:"assets/concepts_emojis.md.c707dabb.lean.js",revision:null},{url:"assets/concepts_index.md.dd402eaf.js",revision:null},{url:"assets/concepts_index.md.dd402eaf.lean.js",revision:null},{url:"assets/concepts_molang.md.62981966.js",revision:null},{url:"assets/concepts_molang.md.62981966.lean.js",revision:null},{url:"assets/concepts_namespaces.md.91530506.js",revision:null},{url:"assets/concepts_namespaces.md.91530506.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.2ec0423f.js",revision:null},{url:"assets/concepts_overwriting-assets.md.2ec0423f.lean.js",revision:null},{url:"assets/concepts_shaders.md.a44982b6.js",revision:null},{url:"assets/concepts_shaders.md.a44982b6.lean.js",revision:null},{url:"assets/concepts_sounds.md.081bac42.js",revision:null},{url:"assets/concepts_sounds.md.081bac42.lean.js",revision:null},{url:"assets/concepts_subpacks.md.ad7c9341.js",revision:null},{url:"assets/concepts_subpacks.md.ad7c9341.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.f748dcd5.js",revision:null},{url:"assets/concepts_text-and-translations.md.f748dcd5.lean.js",revision:null},{url:"assets/concepts_textures-list.md.6ccaa2d2.js",revision:null},{url:"assets/concepts_textures-list.md.6ccaa2d2.lean.js",revision:null},{url:"assets/contribute-how-to.md.16378d10.js",revision:null},{url:"assets/contribute-how-to.md.16378d10.lean.js",revision:null},{url:"assets/contribute-style.md.45a074c6.js",revision:null},{url:"assets/contribute-style.md.45a074c6.lean.js",revision:null},{url:"assets/contribute.md.d985e8fe.js",revision:null},{url:"assets/contribute.md.d985e8fe.lean.js",revision:null},{url:"assets/discord.md.b3e3dd6d.js",revision:null},{url:"assets/discord.md.b3e3dd6d.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.0ff60956.js",revision:null},{url:"assets/documentation_advanced-molang.md.0ff60956.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.6f256f87.js",revision:null},{url:"assets/documentation_creative-categories.md.6f256f87.lean.js",revision:null},{url:"assets/documentation_file-types.md.cae41666.js",revision:null},{url:"assets/documentation_file-types.md.cae41666.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.5652e825.js",revision:null},{url:"assets/documentation_fog-ids.md.5652e825.lean.js",revision:null},{url:"assets/documentation_index.md.11e885a1.js",revision:null},{url:"assets/documentation_index.md.11e885a1.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.e8d75129.js",revision:null},{url:"assets/documentation_material-config-description.md.e8d75129.lean.js",revision:null},{url:"assets/documentation_materials.md.aef7e14c.js",revision:null},{url:"assets/documentation_materials.md.aef7e14c.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.cea193dc.js",revision:null},{url:"assets/documentation_pack-structure.md.cea193dc.lean.js",revision:null},{url:"assets/documentation_projectiles.md.6457c458.js",revision:null},{url:"assets/documentation_projectiles.md.6457c458.lean.js",revision:null},{url:"assets/documentation_queries.md.02a9689a.js",revision:null},{url:"assets/documentation_queries.md.02a9689a.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.5124b8ae.js",revision:null},{url:"assets/documentation_shared-constructs.md.5124b8ae.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.f3a243fc.js",revision:null},{url:"assets/documentation_sound-definitions.md.f3a243fc.lean.js",revision:null},{url:"assets/entities_boat-entities.md.2b3e0b6c.js",revision:null},{url:"assets/entities_boat-entities.md.2b3e0b6c.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e4d4c126.js",revision:null},{url:"assets/entities_detecting-other-entities.md.e4d4c126.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9dafdae4.js",revision:null},{url:"assets/entities_disabling-team-damage.md.9dafdae4.lean.js",revision:null},{url:"assets/entities_dummy-components.md.3b790122.js",revision:null},{url:"assets/entities_dummy-components.md.3b790122.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.a8761b9a.js",revision:null},{url:"assets/entities_dummy-entities.md.a8761b9a.lean.js",revision:null},{url:"assets/entities_entity-attack.md.9d4f7786.js",revision:null},{url:"assets/entities_entity-attack.md.9d4f7786.lean.js",revision:null},{url:"assets/entities_entity-events.md.ffcb7ac1.js",revision:null},{url:"assets/entities_entity-events.md.ffcb7ac1.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.c6cbcc99.js",revision:null},{url:"assets/entities_entity-holds-item.md.c6cbcc99.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.6ba02435.js",revision:null},{url:"assets/entities_entity-intro-bp.md.6ba02435.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.60c16d9f.js",revision:null},{url:"assets/entities_entity-intro-rp.md.60c16d9f.lean.js",revision:null},{url:"assets/entities_entity-movement.md.83fe953a.js",revision:null},{url:"assets/entities_entity-movement.md.83fe953a.lean.js",revision:null},{url:"assets/entities_entity-properties.md.8ae5025b.js",revision:null},{url:"assets/entities_entity-properties.md.8ae5025b.lean.js",revision:null},{url:"assets/entities_flying-entities.md.80fe6ad5.js",revision:null},{url:"assets/entities_flying-entities.md.80fe6ad5.lean.js",revision:null},{url:"assets/entities_index.md.04abdba1.js",revision:null},{url:"assets/entities_index.md.04abdba1.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d5c52409.js",revision:null},{url:"assets/entities_introduction-to-aec.md.d5c52409.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.7bf4a9a3.js",revision:null},{url:"assets/entities_invulnerable-entities.md.7bf4a9a3.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.b56b0874.js",revision:null},{url:"assets/entities_look-at-entity.md.b56b0874.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.fd2c135b.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.fd2c135b.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.7d113623.js",revision:null},{url:"assets/entities_npc-dialogs.md.7d113623.lean.js",revision:null},{url:"assets/entities_render-controllers.md.d1761ffa.js",revision:null},{url:"assets/entities_render-controllers.md.d1761ffa.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.0feed45a.js",revision:null},{url:"assets/entities_runtime-identifier.md.0feed45a.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.d594753b.js",revision:null},{url:"assets/entities_sleeping-entities.md.d594753b.lean.js",revision:null},{url:"assets/entities_solid-entities.md.8538edbc.js",revision:null},{url:"assets/entities_solid-entities.md.8538edbc.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.8e5a0c21.js",revision:null},{url:"assets/entities_spawn-rules.md.8e5a0c21.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.bfbea212.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.bfbea212.lean.js",revision:null},{url:"assets/entities_timers.md.99939692.js",revision:null},{url:"assets/entities_timers.md.99939692.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.279616a2.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.279616a2.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.9610e092.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.9610e092.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.280fc8c6.js",revision:null},{url:"assets/entities_village-mechanic.md.280fc8c6.lean.js",revision:null},{url:"assets/entities_vuc-full.md.dc4d1f2a.lean.js",revision:null},{url:"assets/entities_vusr-full.md.a5f3ce8b.js",revision:null},{url:"assets/entities_vusr-full.md.a5f3ce8b.lean.js",revision:null},{url:"assets/graph-test.md.869d47e0.js",revision:null},{url:"assets/graph-test.md.869d47e0.lean.js",revision:null},{url:"assets/guide_addons.md.80580cfb.js",revision:null},{url:"assets/guide_addons.md.80580cfb.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.df42856a.js",revision:null},{url:"assets/guide_advancedmanifest.md.df42856a.lean.js",revision:null},{url:"assets/guide_blockbench.md.7186a5bf.js",revision:null},{url:"assets/guide_blockbench.md.7186a5bf.lean.js",revision:null},{url:"assets/guide_custom-entity.md.2b9c591a.js",revision:null},{url:"assets/guide_custom-entity.md.2b9c591a.lean.js",revision:null},{url:"assets/guide_custom-item.md.185b493e.js",revision:null},{url:"assets/guide_custom-item.md.185b493e.lean.js",revision:null},{url:"assets/guide_download-packs.md.327ba2af.js",revision:null},{url:"assets/guide_download-packs.md.327ba2af.lean.js",revision:null},{url:"assets/guide_format-version.md.ac19d256.js",revision:null},{url:"assets/guide_format-version.md.ac19d256.lean.js",revision:null},{url:"assets/guide_index.md.4cca014d.js",revision:null},{url:"assets/guide_index.md.4cca014d.lean.js",revision:null},{url:"assets/guide_introduction.md.c0da0118.js",revision:null},{url:"assets/guide_introduction.md.c0da0118.lean.js",revision:null},{url:"assets/guide_loot-table.md.65d16b5c.js",revision:null},{url:"assets/guide_loot-table.md.65d16b5c.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.b1d04a53.js",revision:null},{url:"assets/guide_project-setup-android.md.b1d04a53.lean.js",revision:null},{url:"assets/guide_project-setup.md.bb9960ae.js",revision:null},{url:"assets/guide_project-setup.md.bb9960ae.lean.js",revision:null},{url:"assets/guide_software-preparation.md.53f6fed0.js",revision:null},{url:"assets/guide_software-preparation.md.53f6fed0.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.f220738c.js",revision:null},{url:"assets/guide_troubleshooting.md.f220738c.lean.js",revision:null},{url:"assets/guide_understanding-json.md.8ee2da9c.js",revision:null},{url:"assets/guide_understanding-json.md.8ee2da9c.lean.js",revision:null},{url:"assets/hacktoberfest.md.ae24e5e6.js",revision:null},{url:"assets/hacktoberfest.md.ae24e5e6.lean.js",revision:null},{url:"assets/index.md.5915cecd.js",revision:null},{url:"assets/index.md.5915cecd.lean.js",revision:null},{url:"assets/items_attachables.md.d98c5346.js",revision:null},{url:"assets/items_attachables.md.d98c5346.lean.js",revision:null},{url:"assets/items_custom-armor.md.d4693628.js",revision:null},{url:"assets/items_custom-armor.md.d4693628.lean.js",revision:null},{url:"assets/items_custom-weapon.md.012e5271.js",revision:null},{url:"assets/items_custom-weapon.md.012e5271.lean.js",revision:null},{url:"assets/items_enchantments.md.6e415b15.js",revision:null},{url:"assets/items_enchantments.md.6e415b15.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.65a033d4.js",revision:null},{url:"assets/items_equipped-item-commands.md.65a033d4.lean.js",revision:null},{url:"assets/items_index.md.287ecdda.js",revision:null},{url:"assets/items_index.md.287ecdda.lean.js",revision:null},{url:"assets/items_item-identifiers.md.e0c83bc9.js",revision:null},{url:"assets/items_item-identifiers.md.e0c83bc9.lean.js",revision:null},{url:"assets/items_items-16.md.fa92f788.js",revision:null},{url:"assets/items_items-16.md.fa92f788.lean.js",revision:null},{url:"assets/items_items-intro.md.a2668b22.js",revision:null},{url:"assets/items_items-intro.md.a2668b22.lean.js",revision:null},{url:"assets/items_spawning-items.md.b23888b1.js",revision:null},{url:"assets/items_spawning-items.md.b23888b1.lean.js",revision:null},{url:"assets/items_spear.md.6ab03b38.js",revision:null},{url:"assets/items_spear.md.6ab03b38.lean.js",revision:null},{url:"assets/items_throwable.md.5ff36575.js",revision:null},{url:"assets/items_throwable.md.5ff36575.lean.js",revision:null},{url:"assets/items_tool-durability.md.e6150040.js",revision:null},{url:"assets/items_tool-durability.md.e6150040.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.08c51759.js",revision:null},{url:"assets/items_troubleshooting-items.md.08c51759.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.c3fed19e.js",revision:null},{url:"assets/items_vanilla-usage-items.md.c3fed19e.lean.js",revision:null},{url:"assets/items_vui-full.md.5edc7631.js",revision:null},{url:"assets/items_vui-full.md.5edc7631.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d5406bfd.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.d5406bfd.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.d10e12b0.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.d10e12b0.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.e79d6656.js",revision:null},{url:"assets/json-ui_best-practices.md.e79d6656.lean.js",revision:null},{url:"assets/json-ui_index.md.33468bb1.js",revision:null},{url:"assets/json-ui_index.md.33468bb1.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e49b8345.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.e49b8345.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.829c4e60.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.829c4e60.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a6866773.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.a6866773.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.9716b09a.js",revision:null},{url:"assets/json-ui_string-to-number.md.9716b09a.lean.js",revision:null},{url:"assets/loot_index.md.a324c4ca.js",revision:null},{url:"assets/loot_index.md.a324c4ca.lean.js",revision:null},{url:"assets/loot_item-functions.md.8f7f7ac1.js",revision:null},{url:"assets/loot_item-functions.md.8f7f7ac1.lean.js",revision:null},{url:"assets/loot_loot-tables.md.7256149a.js",revision:null},{url:"assets/loot_loot-tables.md.7256149a.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.7b58c873.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.7b58c873.lean.js",revision:null},{url:"assets/loot_recipes.md.d4f3ad52.js",revision:null},{url:"assets/loot_recipes.md.d4f3ad52.lean.js",revision:null},{url:"assets/loot_trade-tables.md.9b094f0d.js",revision:null},{url:"assets/loot_trade-tables.md.9b094f0d.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.318e6246.js",revision:null},{url:"assets/loot_trading-behavior.md.318e6246.lean.js",revision:null},{url:"assets/meta_addon-performance.md.3726605b.js",revision:null},{url:"assets/meta_addon-performance.md.3726605b.lean.js",revision:null},{url:"assets/meta_index.md.febf39ef.js",revision:null},{url:"assets/meta_index.md.febf39ef.lean.js",revision:null},{url:"assets/meta_jq.md.0ef7e4db.js",revision:null},{url:"assets/meta_jq.md.0ef7e4db.lean.js",revision:null},{url:"assets/meta_style-guide.md.84864fa8.js",revision:null},{url:"assets/meta_style-guide.md.84864fa8.lean.js",revision:null},{url:"assets/meta_useful-links.md.63ba3930.js",revision:null},{url:"assets/meta_useful-links.md.63ba3930.lean.js",revision:null},{url:"assets/meta_using-schemas.md.5fc9014c.js",revision:null},{url:"assets/meta_using-schemas.md.5fc9014c.lean.js",revision:null},{url:"assets/meta_version-control.md.8d1ead87.js",revision:null},{url:"assets/meta_version-control.md.8d1ead87.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.eedefba4.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.eedefba4.lean.js",revision:null},{url:"assets/nbt_index.md.fd4ceb73.js",revision:null},{url:"assets/nbt_index.md.fd4ceb73.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.3e0e1adf.js",revision:null},{url:"assets/nbt_mcstructure.md.3e0e1adf.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.42ac20a9.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.42ac20a9.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.37f476b2.js",revision:null},{url:"assets/nbt_step-by-step-example.md.37f476b2.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.cadbeacc.js",revision:null},{url:"assets/nbt_structure-limits.md.cadbeacc.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.8800bdc4.js",revision:null},{url:"assets/particles_disabling-particles.md.8800bdc4.lean.js",revision:null},{url:"assets/particles_index.md.59b6147a.js",revision:null},{url:"assets/particles_index.md.59b6147a.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.5e206a67.js",revision:null},{url:"assets/particles_particles-and-sounds.md.5e206a67.lean.js",revision:null},{url:"assets/particles_particles.md.a435465b.js",revision:null},{url:"assets/particles_particles.md.a435465b.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.f6edbf4c.js",revision:null},{url:"assets/particles_vanilla-particles.md.f6edbf4c.lean.js",revision:null},{url:"assets/privacy.md.fbe18cb9.js",revision:null},{url:"assets/privacy.md.fbe18cb9.lean.js",revision:null},{url:"assets/scripting_api-environment.md.da42ba7a.js",revision:null},{url:"assets/scripting_api-environment.md.da42ba7a.lean.js",revision:null},{url:"assets/scripting_custom-command.md.ef3f8241.js",revision:null},{url:"assets/scripting_custom-command.md.ef3f8241.lean.js",revision:null},{url:"assets/scripting_game-tests.md.7b66e803.js",revision:null},{url:"assets/scripting_game-tests.md.7b66e803.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.53b66309.js",revision:null},{url:"assets/scripting_gametest-form.md.53b66309.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.fe24d510.js",revision:null},{url:"assets/scripting_gametest-qna.md.fe24d510.lean.js",revision:null},{url:"assets/scripting_index.md.2c76c0a0.js",revision:null},{url:"assets/scripting_index.md.2c76c0a0.lean.js",revision:null},{url:"assets/scripting_resources.md.19950a2b.js",revision:null},{url:"assets/scripting_resources.md.19950a2b.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.287ec705.js",revision:null},{url:"assets/scripting_saving-loading.md.287ec705.lean.js",revision:null},{url:"assets/scripting_script-modules.md.b1712a47.js",revision:null},{url:"assets/scripting_script-modules.md.b1712a47.lean.js",revision:null},{url:"assets/scripting_script-net.md.89edc8d5.js",revision:null},{url:"assets/scripting_script-net.md.89edc8d5.lean.js",revision:null},{url:"assets/scripting_script-server.md.a5dfe39b.js",revision:null},{url:"assets/scripting_script-server.md.a5dfe39b.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.12f2d2cb.js",revision:null},{url:"assets/scripting_script-watchdog.md.12f2d2cb.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.5b7633fe.js",revision:null},{url:"assets/scripting_scripting-intro.md.5b7633fe.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.8988b0b6.js",revision:null},{url:"assets/scripting_starting-scripts.md.8988b0b6.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.8ed3749f.js",revision:null},{url:"assets/scripting_troubleshooting.md.8ed3749f.lean.js",revision:null},{url:"assets/scripting_typescript.md.78a73f20.js",revision:null},{url:"assets/scripting_typescript.md.78a73f20.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.5b8f8d71.js",revision:null},{url:"assets/scripting_what-is-script.md.5b8f8d71.lean.js",revision:null},{url:"assets/servers_index.md.af845295.js",revision:null},{url:"assets/servers_index.md.af845295.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.101f95d4.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.101f95d4.lean.js",revision:null},{url:"assets/servers_server-software.md.ab51522e.js",revision:null},{url:"assets/servers_server-software.md.ab51522e.lean.js",revision:null},{url:"assets/style.bd0bdede.css",revision:null},{url:"assets/test.md.802be4d4.js",revision:null},{url:"assets/test.md.802be4d4.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.8e34585e.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.8e34585e.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.8ed38be1.js",revision:null},{url:"assets/visuals_animation-effects.md.8ed38be1.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f5dc874e.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.f5dc874e.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1b1fd976.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.1b1fd976.lean.js",revision:null},{url:"assets/visuals_death-animations.md.c3a1c8f8.js",revision:null},{url:"assets/visuals_death-animations.md.c3a1c8f8.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.4d03e78e.js",revision:null},{url:"assets/visuals_glowing-texture.md.4d03e78e.lean.js",revision:null},{url:"assets/visuals_index.md.e08db81d.js",revision:null},{url:"assets/visuals_index.md.e08db81d.lean.js",revision:null},{url:"assets/visuals_introduction.md.d9059a5d.js",revision:null},{url:"assets/visuals_introduction.md.d9059a5d.lean.js",revision:null},{url:"assets/visuals_leash-position.md.564f33a4.js",revision:null},{url:"assets/visuals_leash-position.md.564f33a4.lean.js",revision:null},{url:"assets/visuals_material-creations.md.9d2966ba.js",revision:null},{url:"assets/visuals_material-creations.md.9d2966ba.lean.js",revision:null},{url:"assets/visuals_materials.md.5dd90674.js",revision:null},{url:"assets/visuals_materials.md.5dd90674.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.a60ff137.js",revision:null},{url:"assets/visuals_math-based-animations.md.a60ff137.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.444f37ec.js",revision:null},{url:"assets/visuals_player-geometry.md.444f37ec.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.119f4435.js",revision:null},{url:"assets/visuals_remove-shadows.md.119f4435.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.2b986546.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.2b986546.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.ff667d1a.js",revision:null},{url:"assets/visuals_structure-presentation.md.ff667d1a.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.0326b19b.js",revision:null},{url:"assets/vr_editing-your-first-model.md.0326b19b.lean.js",revision:null},{url:"assets/vr_index.md.0ce505e8.js",revision:null},{url:"assets/vr_index.md.0ce505e8.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.a095d357.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.a095d357.lean.js",revision:null},{url:"assets/vr_pack_setup.md.e2b86564.js",revision:null},{url:"assets/vr_pack_setup.md.e2b86564.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.38271618.js",revision:null},{url:"assets/world-generation_biome-tags.md.38271618.lean.js",revision:null},{url:"assets/world-generation_biomes.md.3ba59742.js",revision:null},{url:"assets/world-generation_biomes.md.3ba59742.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.160dc736.js",revision:null},{url:"assets/world-generation_custom-ores.md.160dc736.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.43f84f4a.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.43f84f4a.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.b0da7432.js",revision:null},{url:"assets/world-generation_feature-types.md.b0da7432.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.65135b01.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.65135b01.lean.js",revision:null},{url:"assets/world-generation_index.md.27215aed.js",revision:null},{url:"assets/world-generation_index.md.27215aed.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.cc537dcb.js",revision:null},{url:"assets/world-generation_structure-features.md.cc537dcb.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.556849ba.js",revision:null},{url:"assets/world-generation_surface-builder.md.556849ba.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.f71211cb.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.f71211cb.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
