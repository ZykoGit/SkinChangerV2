import { world } from "@minecraft/server";

world.afterEvents.itemUse.subscribe(event => {
  const player = event.source;
  const item   = event.itemStack;

  if (item.typeId === "pack:reverter") {

    player.runCommand("replaceitem entity @s slot.armor.head 0 air 1");
    player.runCommand("effect @s clear");
  }
}
