import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

// ========== Main Menu ==========
const ui = new ActionFormData();
ui.title("§l§Zyko Skins Menu");
ui.body("");
ui.button("Skins", "textures/ui/skins");
ui.button("Subscribe", "textures/ui/yt");

// ========== Skins Menu ==========
const skins = new ActionFormData();
skins.title("§l§4Skins Menu");
skins.body("");
skins.button("Main", "textures/ui/MainSkinHead");       // 0
skins.button("Chrimas", "textures/ui/ChristmasHead"     // 1
skins.button("Bday", "textures/ui/BdayHead");           // 2
skins.button("Halloween", "textures/ui/HalloweenHead"); // 3
skins.button("Easter", "textures/ui/EasterHead");       // 4
skins.button("July 4th", "textures/ui/AmerikaHead");    // 5

// ========== Menu Trigger ==========
world.afterEvents.itemUse.subscribe((event) => {
    const { source, itemStack } = event;
    const player = event.source;

    if (itemStack?.typeId !== "pack:menu") return;

    ui.show(source).then((uiRes) => {
        if (uiRes.canceled) return;

        switch (uiRes.selection) {
            
            // — SKINS :D —
            case 0:
                skins.show(source).then((res) => {
                    if (res.canceled) return;
                player.triggerEvent("pa:player");
                source.runCommand("effect @s invisibility 100000 1 true");
                    switch (res.selection) {
                        case 0: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin1");
                        break;
                        
                        case 1: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin2");
                        break;
                        
                        case 2: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin3");
                        break;

                        case 3: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin4");
                        break;
                    
                        case 4: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin5");
                        break;

                        case 5: 
                        source.runCommand("replaceitem entity @s slot.armor.head 0 pack:skin6");
                        break;
                        
                    }
                });
                break;
            // you finna sub? lol its @zykotheogXD
            case 1:
                source.runCommand('tellraw @s { "rawtext" : [ { "text" : "§2[Zyko] §fSubscribe To My Channel \nyoutube: @zykotheogXD " } ] }');
                break;
        }
    });
});


  
