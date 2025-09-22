import { useState } from "react";
import Styles from "./Dropdown.module.css";
import Card from "../Card/Card";

      const DATA = [
  {
    "id": 1,
    "name": "Sticks",
    "description": "",
    "flattenable": true,
    "max_health": 50,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Sticks",
    "icon_asset_name": "GeneratedIcons/Other/Sticks",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 500,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Stick",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 100.0,
    "not_respawning": false
  },
  {
    "id": 2,
    "name": "Bush",
    "description": "",
    "flattenable": true,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BushPlain",
    "icon_asset_name": "GeneratedIcons/Other/Bush",
    "on_destroy_yield": [
      {
        "item_id": 652981079,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 3,
    "name": "Rotten Log",
    "description": "",
    "flattenable": false,
    "max_health": 60,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RottenLog",
    "icon_asset_name": "GeneratedIcons/Other/RottenLog",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Wood Logs",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 4,
    "name": "Rotten Stump",
    "description": "",
    "flattenable": false,
    "max_health": 60,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RottenStump",
    "icon_asset_name": "GeneratedIcons/Other/RottenStump",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Wood Logs",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5,
    "name": "Maple Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeMapleSapling",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 6,
    "name": "Pine Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreePineSapling",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 7,
    "name": "Spruce Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceSapling",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 8,
    "name": "Oak Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeOakSapling",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 9,
    "name": "Birch Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBirchSapling",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 10,
    "name": "Beech Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBeechSapling",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 11,
    "name": "Dead Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeDead",
    "icon_asset_name": "GeneratedIcons/Other/DeadTree",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 12,
    "name": "Young Beech Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeBeechYoung",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 13,
    "name": "Young Birch Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeBirchYoung",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 14,
    "name": "Young Oak Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeOakYoung",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 15,
    "name": "Young Spruce Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeSpruceYoung",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 16,
    "name": "Young Pine Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreePineYoung",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 17,
    "name": "Young Maple Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeMapleYoung",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 18,
    "name": "Dendro Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1785,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeDendro",
    "icon_asset_name": "GeneratedIcons/Other/DendroTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 19,
    "name": "Mature Beech Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeBeechAdult",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 20,
    "name": "Mature Birch Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeBirchAdult",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 21,
    "name": "Mature Oak Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeOakAdult",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 22,
    "name": "Large Stump",
    "description": "",
    "flattenable": false,
    "max_health": 600,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FlaxLogNoThorns",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Stump",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 23,
    "name": "Ancient Oak Tree",
    "description": "",
    "flattenable": false,
    "max_health": 8000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TreeOakAncient",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 24,
    "name": "Gnarled Maple Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeMapleGnarled",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeGnarled",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 25,
    "name": "Mature Maple Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeMapleAdult",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 26,
    "name": "Mature Pine Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreePineAdult",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 27,
    "name": "Mature Spruce Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreeSpruceAdult",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 28,
    "name": "Large Fallen Tree",
    "description": "",
    "flattenable": false,
    "max_health": 7500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeFallenTree",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1000028,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 7,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 6,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": -4,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -4,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -4,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 29,
    "name": "Large Tree Stump",
    "description": "",
    "flattenable": false,
    "max_health": 1785,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeTreeStump",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 30,
    "name": "Stunted Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/WillowTree",
    "icon_asset_name": "GeneratedIcons/Other/WillowTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 31,
    "name": "Dead Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/CypressTreeYoung",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 32,
    "name": "Ancient Pine Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/TreePineAncient",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 33,
    "name": "Mature Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/CypressTreeMature",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 34,
    "name": "Ancient Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/CypressTreeAncient",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 3,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 5,
        "footprint_type": "Walkable"
      },
      {
        "x": -3,
        "z": 4,
        "footprint_type": "Walkable"
      },
      {
        "x": -4,
        "z": 4,
        "footprint_type": "Walkable"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Walkable"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -3,
        "z": -1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 35,
    "name": "Young Baobab Tree",
    "description": "",
    "flattenable": false,
    "max_health": 100000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/YoungBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1872489539,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 36,
    "name": "Ancient Baobab Tree",
    "description": "",
    "flattenable": false,
    "max_health": 100000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1872489539,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 38,
    "name": "Flint Pile",
    "description": "",
    "flattenable": true,
    "max_health": 50,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FlintBoulder",
    "icon_asset_name": "GeneratedIcons/Other/Flint",
    "on_destroy_yield": [
      {
        "item_id": 11002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 501,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 100.0,
    "not_respawning": false
  },
  {
    "id": 40,
    "name": "Limestone Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneBoulder",
    "icon_asset_name": "GeneratedIcons/Other/LimestoneBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 41,
    "name": "Limestone Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneOutcrop",
    "icon_asset_name": "GeneratedIcons/Other/LimestoneOutcrop",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 42,
    "name": "Large Limestone Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneRockLarge",
    "icon_asset_name": "Resources/LargeLimestoneRock1",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 43,
    "name": "Large Limestone Rock",
    "description": "",
    "flattenable": false,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneRockLarge2",
    "icon_asset_name": "Resources/LargeLimestoneRock2",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 44,
    "name": "Large Limestone Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneRockLarge3",
    "icon_asset_name": "GeneratedIcons/Other/LimestoneBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 45,
    "name": "Limestone Rock Formation",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LimestoneOutcrop2",
    "icon_asset_name": "GeneratedIcons/Other/LimestoneBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Rock",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 46,
    "name": "Shale Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ShaleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/ShaleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 47,
    "name": "Shale Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 5950,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT2",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT2",
    "on_destroy_yield": [
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 48,
    "name": "Sandstone Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SandstoneBoulder",
    "icon_asset_name": "GeneratedIcons/Other/SandstoneBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 49,
    "name": "Sandstone Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 5950,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT2",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT2",
    "on_destroy_yield": [
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 50,
    "name": "Granite Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GraniteBoulder",
    "icon_asset_name": "GeneratedIcons/Other/GraniteBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 51,
    "name": "Granite Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 6855,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT3",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT3",
    "on_destroy_yield": [
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 52,
    "name": "Basalt Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 7725,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT4",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT4",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -44,
        "z": 28,
        "footprint_type": "Hitbox"
      },
      {
        "x": -49,
        "z": 31,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 53,
    "name": "Basalt Stalagmite",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BasaltStalagmite",
    "icon_asset_name": "GeneratedIcons/Other/BasaltStalagmite",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 54,
    "name": "Diorite Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 8560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT5",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT5",
    "on_destroy_yield": [
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 55,
    "name": "Diorite Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DioriteBoulder",
    "icon_asset_name": "GeneratedIcons/Other/DioriteBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 56,
    "name": "Marble Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 9375,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT6",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT6",
    "on_destroy_yield": [
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 57,
    "name": "Marble Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MarbleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/MarbleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 2006,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 58,
    "name": "Ferralith Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 59,
    "name": "Ferralith Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1Large",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 60,
    "name": "Rich Ferralith Vein",
    "description": "",
    "flattenable": false,
    "max_health": 3000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1Large",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 61,
    "name": "Pyrelite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT2Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 62,
    "name": "Emarium Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT3Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 63,
    "name": "Elenvar Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT4Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 64,
    "name": "Luminite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT5Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 65,
    "name": "Rathium Vein",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT6Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 66,
    "name": "Mud Mound",
    "description": "",
    "flattenable": false,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MudMound",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 67,
    "name": "Clay Mound",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ClayMound",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 2,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 68,
    "name": "Earthenware Clay",
    "description": "",
    "flattenable": false,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EarthenwareClay",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT3",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 3,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 69,
    "name": "Fine Clay",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FineClay",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT4",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 4,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 70,
    "name": "Kaolinite Clay",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KaoliniteClay",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT5",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 5,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 71,
    "name": "Bentonite Clay",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BentoniteClay",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT6",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 6,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 72,
    "name": "Wild Grains",
    "description": "",
    "flattenable": true,
    "max_health": 100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildGrains",
    "icon_asset_name": "GeneratedIcons/Other/WildGrains",
    "on_destroy_yield": [
      {
        "item_id": 1100002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Wild Grain",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 73,
    "name": "Strawberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 300,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BushStrawberry",
    "icon_asset_name": "GeneratedIcons/Other/BushStrawberry",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 74,
    "name": "Button Mushrooms",
    "description": "",
    "flattenable": true,
    "max_health": 200,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MushroomButton",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT1",
    "on_destroy_yield": [
      {
        "item_id": 1130002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 75,
    "name": "Blackberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 515,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BushBlackberry",
    "icon_asset_name": "GeneratedIcons/Other/BushBlackberry",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 76,
    "name": "Oyster Mushrooms",
    "description": "",
    "flattenable": true,
    "max_health": 405,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/OysterMushrooms",
    "on_destroy_yield": [
      {
        "item_id": 1188640605,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 77,
    "name": "Prickly Pear",
    "description": "",
    "flattenable": false,
    "max_health": 150,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PricklyPear",
    "icon_asset_name": "GeneratedIcons/Other/PricklyPear",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Fruit",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 78,
    "name": "Juniper Berry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 410,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/JuniperBerryBush",
    "icon_asset_name": "GeneratedIcons/Other/JuniperBerryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 79,
    "name": "Chanterelles",
    "description": "",
    "flattenable": true,
    "max_health": 240,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MushroomChanterelles",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT2",
    "on_destroy_yield": [
      {
        "item_id": 2130002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 80,
    "name": "Honeyberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 355,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HoneyberryBush",
    "icon_asset_name": "GeneratedIcons/Other/HoneyberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 81,
    "name": "Morel Mushrooms",
    "description": "",
    "flattenable": true,
    "max_health": 375,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MorelMushrooms",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT6",
    "on_destroy_yield": [
      {
        "item_id": 6130002,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 82,
    "name": "Truffle Patch",
    "description": "",
    "flattenable": true,
    "max_health": 340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TrufflePatch",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT5",
    "on_destroy_yield": [
      {
        "item_id": 5130002,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 83,
    "name": "King Trumpet",
    "description": "",
    "flattenable": true,
    "max_health": 470,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT9",
    "on_destroy_yield": [
      {
        "item_id": 892842742,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 84,
    "name": "Cloudberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 655,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/CloudberryBush",
    "icon_asset_name": "GeneratedIcons/Other/CloudberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 85,
    "name": "Ghost Mushroom",
    "description": "",
    "flattenable": true,
    "max_health": 435,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT8",
    "on_destroy_yield": [
      {
        "item_id": 121211472,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 86,
    "name": "Citriformis",
    "description": "",
    "flattenable": true,
    "max_health": 1170,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Citriformis",
    "icon_asset_name": "GeneratedIcons/Other/Citriformis",
    "on_destroy_yield": [
      {
        "item_id": 1359045035,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 87,
    "name": "Dandelions",
    "description": "",
    "flattenable": true,
    "max_health": 595,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildDandelion",
    "icon_asset_name": "GeneratedIcons/Other/WildDandelion",
    "on_destroy_yield": [
      {
        "item_id": 2130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 88,
    "name": "Daisies",
    "description": "",
    "flattenable": true,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildDaisies",
    "icon_asset_name": "GeneratedIcons/Other/WildDaisies",
    "on_destroy_yield": [
      {
        "item_id": 1130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 89,
    "name": "Lavender",
    "description": "",
    "flattenable": true,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Wildflowers",
    "icon_asset_name": "GeneratedIcons/Other/Wildflowers",
    "on_destroy_yield": [
      {
        "item_id": 1130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 90,
    "name": "Lavender Cluster",
    "description": "",
    "flattenable": true,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeLavender",
    "icon_asset_name": "Resources/LargeLavender",
    "on_destroy_yield": [
      {
        "item_id": 1130005,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 91,
    "name": "Small Lavender Cluster",
    "description": "",
    "flattenable": true,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MediumLavender",
    "icon_asset_name": "Resources/MediumLavender",
    "on_destroy_yield": [
      {
        "item_id": 1130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 92,
    "name": "Bluebell",
    "description": "",
    "flattenable": true,
    "max_health": 770,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Bluebell",
    "icon_asset_name": "GeneratedIcons/Other/Bluebell",
    "on_destroy_yield": [
      {
        "item_id": 4130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 93,
    "name": "Aloe",
    "description": "",
    "flattenable": true,
    "max_health": 685,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Aloe",
    "icon_asset_name": "GeneratedIcons/Other/Aloe",
    "on_destroy_yield": [
      {
        "item_id": 3130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 94,
    "name": "Peppermint",
    "description": "",
    "flattenable": true,
    "max_health": 595,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildPeppermint",
    "icon_asset_name": "GeneratedIcons/Other/WildPeppermint",
    "on_destroy_yield": [
      {
        "item_id": 2130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 95,
    "name": "Snowdrop Flowers",
    "description": "",
    "flattenable": true,
    "max_health": 685,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SnowdropFlowers",
    "icon_asset_name": "GeneratedIcons/Other/SnowdropFlowers",
    "on_destroy_yield": [
      {
        "item_id": 3130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 96,
    "name": "Marigold",
    "description": "",
    "flattenable": true,
    "max_health": 685,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Marigold",
    "icon_asset_name": "GeneratedIcons/Other/Marigold",
    "on_destroy_yield": [
      {
        "item_id": 3130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 97,
    "name": "Thyme",
    "description": "",
    "flattenable": true,
    "max_health": 685,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Thyme",
    "icon_asset_name": "GeneratedIcons/Other/Thyme",
    "on_destroy_yield": [
      {
        "item_id": 3130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 98,
    "name": "Morning Glory",
    "description": "",
    "flattenable": true,
    "max_health": 855,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MorningGlory",
    "icon_asset_name": "GeneratedIcons/Other/MorningGlory",
    "on_destroy_yield": [
      {
        "item_id": 5130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 99,
    "name": "Desert Rose",
    "description": "",
    "flattenable": true,
    "max_health": 935,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DesertRose",
    "icon_asset_name": "GeneratedIcons/Other/DesertRose",
    "on_destroy_yield": [
      {
        "item_id": 6130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 100,
    "name": "Rosemary",
    "description": "",
    "flattenable": true,
    "max_health": 770,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Rosemary",
    "icon_asset_name": "GeneratedIcons/Other/Rosemary",
    "on_destroy_yield": [
      {
        "item_id": 4130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 101,
    "name": "Fireweed",
    "description": "",
    "flattenable": true,
    "max_health": 935,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Fireweed",
    "icon_asset_name": "GeneratedIcons/Other/Fireweed",
    "on_destroy_yield": [
      {
        "item_id": 6130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 102,
    "name": "White Lily",
    "description": "",
    "flattenable": true,
    "max_health": 1245,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WhiteLily",
    "icon_asset_name": "GeneratedIcons/Other/WhiteLily",
    "on_destroy_yield": [
      {
        "item_id": 1879591029,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 103,
    "name": "Ghost Thyme",
    "description": "",
    "flattenable": true,
    "max_health": 855,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GhostThyme",
    "icon_asset_name": "GeneratedIcons/Other/GhostThyme",
    "on_destroy_yield": [
      {
        "item_id": 5130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 104,
    "name": "Golden Witlow",
    "description": "",
    "flattenable": true,
    "max_health": 1015,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GoldenWitlow",
    "icon_asset_name": "GeneratedIcons/Other/GoldenWitlow",
    "on_destroy_yield": [
      {
        "item_id": 418805707,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 105,
    "name": "King of the Alps",
    "description": "",
    "flattenable": true,
    "max_health": 1095,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KingOfTheAlps",
    "icon_asset_name": "GeneratedIcons/Other/KingOfTheAlps",
    "on_destroy_yield": [
      {
        "item_id": 1935440864,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 125,
    "name": "Ferns",
    "description": "",
    "flattenable": true,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Ferns",
    "icon_asset_name": "GeneratedIcons/Other/Ferns",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 127,
    "name": "Pine Weed",
    "description": "",
    "flattenable": true,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PineWeed",
    "icon_asset_name": "GeneratedIcons/Other/PineWeed",
    "on_destroy_yield": [
      {
        "item_id": 192409188,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 128,
    "name": "Grassy Reeds",
    "description": "",
    "flattenable": true,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GrassyReeds",
    "icon_asset_name": "GeneratedIcons/Other/GrassyReeds",
    "on_destroy_yield": [
      {
        "item_id": 1743603212,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 129,
    "name": "Reindeer Lichen",
    "description": "",
    "flattenable": true,
    "max_health": 1015,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ReindeerLichen",
    "icon_asset_name": "GeneratedIcons/Other/ReindeerLichen",
    "on_destroy_yield": [
      {
        "item_id": 418805707,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 130,
    "name": "Ghost Succulent",
    "description": "",
    "flattenable": true,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GhostSucculent",
    "icon_asset_name": "GeneratedIcons/Other/GhostSucculent",
    "on_destroy_yield": [
      {
        "item_id": 1094309053,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 131,
    "name": "Bullrushes",
    "description": "",
    "flattenable": true,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Bullrushes",
    "icon_asset_name": "GeneratedIcons/Other/Bullrushes",
    "on_destroy_yield": [
      {
        "item_id": 1094309053,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 132,
    "name": "Spanish Moss",
    "description": "",
    "flattenable": true,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SpanishMoss",
    "icon_asset_name": "GeneratedIcons/Other/SpanishMoss",
    "on_destroy_yield": [
      {
        "item_id": 1094309053,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 133,
    "name": "Thorny Stump",
    "description": "",
    "flattenable": false,
    "max_health": 800,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FlaxLog",
    "icon_asset_name": "Resources/FlaxLog",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 22,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Stump",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 134,
    "name": "Brambles",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Brambles",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/Brambles",
    "on_destroy_yield": [
      {
        "item_id": 442004724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 135,
    "name": "Heather",
    "description": "",
    "flattenable": true,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Heather",
    "icon_asset_name": "GeneratedIcons/Other/Heather",
    "on_destroy_yield": [
      {
        "item_id": 1632765422,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 136,
    "name": "Large Brambles",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeBrambles",
    "icon_asset_name": "GeneratedIcons/Other/LargeBrambles",
    "on_destroy_yield": [
      {
        "item_id": 1632765422,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 137,
    "name": "Arctic Grass",
    "description": "",
    "flattenable": true,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RedArcticGrass",
    "icon_asset_name": "GeneratedIcons/Other/RedArcticGrass",
    "on_destroy_yield": [
      {
        "item_id": 1558771097,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 138,
    "name": "Pink Lilies",
    "description": "",
    "flattenable": true,
    "max_health": 855,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PinkLilies",
    "icon_asset_name": "GeneratedIcons/Other/PinkLilies",
    "on_destroy_yield": [
      {
        "item_id": 5130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 139,
    "name": "Ancient Thorns",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientThorns",
    "icon_asset_name": "GeneratedIcons/Other/AncientThorns",
    "on_destroy_yield": [
      {
        "item_id": 1440938837,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 140,
    "name": "Rough Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RoughHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/RoughHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 1220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 141,
    "name": "Simple Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 120,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SimpleHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/SimpleHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 2220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 142,
    "name": "Neat Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 135,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/NeatHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/NeatHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 3220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 143,
    "name": "Fine Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 155,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FineHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/FineHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 4220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 144,
    "name": "Exquisite Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 170,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ExquisiteHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/ExquisiteHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 5220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 145,
    "name": "Peerless Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PeerlessHieroglyphs",
    "icon_asset_name": "GeneratedIcons/Other/PeerlessHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 6220017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 152,
    "name": "Gem Encrusted Stalagmite",
    "description": "",
    "flattenable": false,
    "max_health": 3000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GemEncrustedStalagmite",
    "icon_asset_name": "Resources/GemEncrustedStalagmite",
    "on_destroy_yield": [
      {
        "item_id": 4000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Metal Outcrop",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 153,
    "name": "Fossils",
    "description": "",
    "flattenable": false,
    "max_health": 200,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Fossils",
    "icon_asset_name": "GeneratedIcons/Other/Fossils",
    "on_destroy_yield": [
      {
        "item_id": 1080003,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Bones",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 154,
    "name": "Sandcovered Fossils",
    "description": "",
    "flattenable": false,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SandcoveredFossils",
    "icon_asset_name": "GeneratedIcons/Other/SandcoveredFossils",
    "on_destroy_yield": [
      {
        "item_id": 1638186849,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 153,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Bones",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 156,
    "name": "Wild Starbulb Plant",
    "description": "",
    "flattenable": true,
    "max_health": 100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildOnion",
    "icon_asset_name": "GeneratedIcons/Other/WildOnion",
    "on_destroy_yield": [
      {
        "item_id": 1100003,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Wild Vegetable",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 158,
    "name": "Salt Deposit",
    "description": "",
    "flattenable": true,
    "max_health": 200,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SaltDeposit",
    "icon_asset_name": "GeneratedIcons/Other/SaltDeposit",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Salt",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 159,
    "name": "Vines",
    "description": "",
    "flattenable": false,
    "max_health": 350,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Vines",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 160,
    "name": "Root",
    "description": "",
    "flattenable": false,
    "max_health": 350,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Roots",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 161,
    "name": "Rubble",
    "description": "",
    "flattenable": false,
    "max_health": 350,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Rubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 162,
    "name": "Ancient Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 163,
    "name": "Ancient Blue Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 164,
    "name": "Ancient Red Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 165,
    "name": "Ancient Green Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 166,
    "name": "Ancient Yellow Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 167,
    "name": "Complicated Ancient Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 168,
    "name": "Ancient Door ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 170,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 169,
    "name": "Ancient Door   ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 170,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 170,
    "name": "Large Rubble",
    "description": "",
    "flattenable": false,
    "max_health": 525,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeRubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 171,
    "name": "Ancient Brazier",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientTorch",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 173,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 172,
    "name": "Ancient Brazier ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientTorch",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 174,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 173,
    "name": "Lit Ancient Brazier",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientTorchLit",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 174,
    "name": "Broken Ancient Brazier",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientTorchBroken",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 175,
    "name": "Hexite Aurumite Axe",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HexiteBronzeAxeResource",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 176,
    "name": "Collapsed Pillars",
    "description": "",
    "flattenable": false,
    "max_health": 775,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeRubbleTier2",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 177,
    "name": "Lit Wooden Brazier",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LitBrazier",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 178,
    "name": "Wooden Brazier",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Brazier",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 177,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 179,
    "name": "Vines T2",
    "description": "",
    "flattenable": false,
    "max_health": 525,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Vines",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 180,
    "name": "Root T2",
    "description": "",
    "flattenable": false,
    "max_health": 525,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Roots",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 181,
    "name": "Rubble T2",
    "description": "",
    "flattenable": false,
    "max_health": 525,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Rubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 182,
    "name": "Lit Wooden Brazier ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LitBrazierOffset",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 183,
    "name": "Wooden Brazier ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Brazier",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 182,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 184,
    "name": "Collapsed Pillar",
    "description": "",
    "flattenable": false,
    "max_health": 525,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargerRubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 185,
    "name": "Ancient Adventurer's Letter",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 502,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 185,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 186,
    "name": "Ancient Trapsmith's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 504,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 186,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 187,
    "name": "Baffled Adventurer's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 506,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 187,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 188,
    "name": "Apprehensive Adventurer's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 507,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 188,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 189,
    "name": "Helpful Adventurer's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNoteRaised",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 508,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 189,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 190,
    "name": "Key Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillar",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 2190011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 191,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 191,
    "name": "Empty Key Pedestal ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillarEmpty",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 192,
    "name": "Intricate Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 193,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 193,
    "name": "Open Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoorOpen",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 194,
    "name": "Ancient Adventurer's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 509,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 194,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 195,
    "name": "Powered Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PoweredDoor",
    "icon_asset_name": "Resources/PoweredDoor",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Door",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 196,
    "name": "Partially Powered Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PartiallyPoweredDoor",
    "icon_asset_name": "Resources/PartiallyPoweredDoor",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 195,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Door",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 197,
    "name": "Unpowered Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/UnpoweredDoor",
    "icon_asset_name": "Resources/UnpoweredDoor",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 196,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Door",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 198,
    "name": "Powered Door Contraption",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LeverDoorContraptionState1",
    "icon_asset_name": "Resources/LeverDoorContraptionState1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 199,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 11,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 11,
        "footprint_type": "Hitbox"
      },
      {
        "x": -7,
        "z": 9,
        "footprint_type": "Walkable"
      },
      {
        "x": -6,
        "z": 8,
        "footprint_type": "Walkable"
      },
      {
        "x": -7,
        "z": 8,
        "footprint_type": "Walkable"
      },
      {
        "x": -6,
        "z": 7,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 7,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 8,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 8,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 9,
        "footprint_type": "Walkable"
      },
      {
        "x": -10,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": -9,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 5,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Door",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 199,
    "name": "Overloaded Door Contraption",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LeverDoorContraptionState2",
    "icon_asset_name": "Resources/LeverDoorContraptionState2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 198,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 11,
        "footprint_type": "Walkable"
      },
      {
        "x": -6,
        "z": 11,
        "footprint_type": "Walkable"
      },
      {
        "x": -7,
        "z": 9,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 8,
        "footprint_type": "Hitbox"
      },
      {
        "x": -7,
        "z": 8,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 7,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 7,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 8,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 8,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 9,
        "footprint_type": "Hitbox"
      },
      {
        "x": -10,
        "z": 6,
        "footprint_type": "Walkable"
      },
      {
        "x": -9,
        "z": 5,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": 6,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": 5,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Door",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 200,
    "name": "Ornate Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 193,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 201,
    "name": "Energy Source",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 70001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 201,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 202,
    "name": "Ornate Key Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillar",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 6190011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 191,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 203,
    "name": "Advanced Key Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillar",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 6190013,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 191,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 204,
    "name": "Power Source",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 70002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 204,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 205,
    "name": "Broken Power Source",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientTorchBroken",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 204,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 206,
    "name": "Collapsed Marble Pillars",
    "description": "",
    "flattenable": false,
    "max_health": 2100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeRubbleTier2",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 207,
    "name": "Advanced Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 193,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 208,
    "name": "Right Power Core Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 6190012,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 209,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 209,
    "name": "Empty Power Core Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillarEmpty",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 210,
    "name": "Runic Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 193,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 211,
    "name": "Trap Rubble",
    "description": "",
    "flattenable": false,
    "max_health": 15000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TrapCircleRubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 212,
    "name": "Runic Door ",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 211,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 213,
    "name": "Mysterious Contraption",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MysteriousContraption",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 214,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -12,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 12,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": -9,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": -15,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": 6,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 12,
        "footprint_type": "Hitbox"
      },
      {
        "x": -12,
        "z": 12,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 12,
        "footprint_type": "Hitbox"
      },
      {
        "x": -18,
        "z": 12,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": 12,
        "footprint_type": "Hitbox"
      },
      {
        "x": -15,
        "z": 18,
        "footprint_type": "Hitbox"
      },
      {
        "x": -9,
        "z": 18,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 18,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 214,
    "name": "Powered Contraption",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PoweredContraption",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 215,
    "name": "Vines T3",
    "description": "",
    "flattenable": false,
    "max_health": 1050,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Vines",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 216,
    "name": "Root T3",
    "description": "",
    "flattenable": false,
    "max_health": 1050,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Roots",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 217,
    "name": "Rubble T3",
    "description": "",
    "flattenable": false,
    "max_health": 1050,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Rubble",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 218,
    "name": "Enadarite Stand",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 5001,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 220,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 219,
    "name": "Key Mold Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 5000,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 221,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 220,
    "name": "Empty Enadarite Stand",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillarEmpty",
    "icon_asset_name": "Resources/KeyPillarEmpty",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 221,
    "name": "Empty Key Mold Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KeyPillarEmpty",
    "icon_asset_name": "Resources/KeyPillarEmpty",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 222,
    "name": "Enadarite Door",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientDoor",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 193,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 223,
    "name": "Left Power Core Pedestal",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/EnergySource",
    "icon_asset_name": "Resources/EnergySource",
    "on_destroy_yield": [
      {
        "item_id": 6190014,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 209,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Obstacle",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 500,
    "name": "Depleted Sticks",
    "description": "",
    "flattenable": true,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DepletedResource",
    "icon_asset_name": "Resources/DepletedResource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": -1,
    "tag": "Depleted Resource",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 501,
    "name": "Depleted Flint",
    "description": "",
    "flattenable": true,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DepletedResource",
    "icon_asset_name": "Resources/DepletedResource",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": -1,
    "tag": "Depleted Resource",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1000028,
    "name": "Large Fallen Tree Stump",
    "description": "",
    "flattenable": false,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeFallenTreeStump",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1000029,
    "name": "Fallen Grove Tree",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FallenGroveTree",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 6,
        "z": -3,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 6,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 5,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 3,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": 7,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 11,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 10,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 1010008,
    "name": "Planted Birch Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBirchSapling",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 2,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1010009,
    "name": "Planted Beech Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBeechSapling",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1010010,
    "name": "Planted Oak Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeOakSapling",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1011008,
    "name": "Planted Birch Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBirchYoung",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1011009,
    "name": "Planted Beech Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBeechYoung",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1011010,
    "name": "Planted Oak Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeOakYoung",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1012008,
    "name": "Fully Grown Birch Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2500,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBirchAdult",
    "icon_asset_name": "GeneratedIcons/Other/BirchTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1012009,
    "name": "Fully Grown Beech Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBeechAdult",
    "icon_asset_name": "GeneratedIcons/Other/BeechTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1012010,
    "name": "Fully Grown Oak Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeOakAdult",
    "icon_asset_name": "GeneratedIcons/Other/OakTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1020001,
    "name": "Medium Ferralith Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT1Med",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1090000,
    "name": "Silken Hexmoths",
    "description": "",
    "flattenable": false,
    "max_health": 200,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/SilkenHexmoths",
    "icon_asset_name": "GeneratedIcons/Other/SilkenHexmoths",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Insects",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1110000,
    "name": "Moonlit Crawdads",
    "description": "",
    "flattenable": false,
    "max_health": 1500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfSunlitGuppies",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT1",
    "on_destroy_yield": [
      {
        "item_id": 1110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1110001,
    "name": "School Of Breezy Fin Darters ",
    "description": "",
    "flattenable": false,
    "max_health": 3000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfBreezyFinDarters",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfBreezyFinDarters",
    "on_destroy_yield": [
      {
        "item_id": 1110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1110002,
    "name": "School Of Oceancrest Marlins",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfOceancrestMarlins",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfOceancrestMarlins",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1110003,
    "name": "Frenzied School Of Oceancrest Marlins",
    "description": "",
    "flattenable": false,
    "max_health": 100000,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfOceancrestMarlins",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfOceancrestMarlins",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1110004,
    "name": "Seaside Clam",
    "description": "",
    "flattenable": false,
    "max_health": 100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SeasideClam",
    "icon_asset_name": "GeneratedIcons/Other/SeasideClam",
    "on_destroy_yield": [
      {
        "item_id": 1110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 2010008,
    "name": "Planted Dendro Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeBirchSapling",
    "icon_asset_name": "GeneratedIcons/Other/DendroTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2011008,
    "name": "Planted Dendro Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1785,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeDendro",
    "icon_asset_name": "GeneratedIcons/Other/DendroTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2012008,
    "name": "Fully Grown Dendro Tree",
    "description": "",
    "flattenable": false,
    "max_health": 1785,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeDendro",
    "icon_asset_name": "GeneratedIcons/Other/DendroTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2020001,
    "name": "Medium Pyrelite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2380,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT2Med",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2020002,
    "name": "Large Pyrelite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 3570,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT2Large",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2050000,
    "name": "Garden Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RockyGardenBoulderA",
    "icon_asset_name": "GeneratedIcons/Other/RockyGardenBoulderA",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2050001,
    "name": "Large Garden Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 5950,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT2",
    "icon_asset_name": "GeneratedIcons/Other/LargeGardenBoulderA",
    "on_destroy_yield": [
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2110000,
    "name": "Driftwood Crayfish",
    "description": "",
    "flattenable": false,
    "max_health": 1785,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfDriftwoodLoach",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT2",
    "on_destroy_yield": [
      {
        "item_id": 2110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2110001,
    "name": "School Of Emberfin Shiners",
    "description": "",
    "flattenable": false,
    "max_health": 3570,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfEmberfinShiners",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfEmberfinShiners",
    "on_destroy_yield": [
      {
        "item_id": 2110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2110002,
    "name": "School Of Serpentfish",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfSerpentFish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfSerpentFish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 2110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2110003,
    "name": "Frenzied School Of Serpentfish",
    "description": "",
    "flattenable": false,
    "max_health": 119000,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfSerpentFish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfSerpentFish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2110004,
    "name": "Tough Shelled Mussel",
    "description": "",
    "flattenable": false,
    "max_health": 200,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ToughShelledMussel",
    "icon_asset_name": "GeneratedIcons/Other/ToughShelledMussel",
    "on_destroy_yield": [
      {
        "item_id": 2110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2140000,
    "name": "Giant Groundsel Plant",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/GiantGroundselPlant",
    "icon_asset_name": "GeneratedIcons/Other/GiantGroundselPlant",
    "on_destroy_yield": [
      {
        "item_id": 192409188,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 2390533,
    "name": "School Of Mysterious Anglerfish",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8Oceanfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 509854054,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3010008,
    "name": "Planted Maple Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeMapleSapling",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 6,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3010009,
    "name": "Planted Pine Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreePineSapling",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3010010,
    "name": "Planted Spruce Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceSapling",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3010011,
    "name": "Planted Willow Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceSapling",
    "icon_asset_name": "GeneratedIcons/Other/WillowTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3011008,
    "name": "Planted Maple Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeMapleYoung",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3011009,
    "name": "Planted Pine Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreePineYoung",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3011010,
    "name": "Planted Spruce Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceYoung",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3011011,
    "name": "Planted Willow Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/WillowTree",
    "icon_asset_name": "GeneratedIcons/Other/WillowTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3012008,
    "name": "Fully Grown Maple Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeMapleAdult",
    "icon_asset_name": "GeneratedIcons/Other/MapleTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3012009,
    "name": "Fully Grown Pine Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreePineAdult",
    "icon_asset_name": "GeneratedIcons/Other/PineTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3012010,
    "name": "Fully Grown Spruce Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceAdult",
    "icon_asset_name": "GeneratedIcons/Other/SpruceTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3012011,
    "name": "Fully Grown Willow Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/WillowTree",
    "icon_asset_name": "GeneratedIcons/Other/WillowTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3020001,
    "name": "Medium Emarium Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2740,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT3Med",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 3020002,
    "name": "Large Emarium Vein",
    "description": "",
    "flattenable": false,
    "max_health": 4115,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT3Large",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 3110000,
    "name": "Hunchback Prawns",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfMuckfinSnapper",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT3",
    "on_destroy_yield": [
      {
        "item_id": 3110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 3110001,
    "name": "School Of Coralcrest Darter",
    "description": "",
    "flattenable": false,
    "max_health": 4115,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfCoralcrestDarter",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfCoralcrestDarter",
    "on_destroy_yield": [
      {
        "item_id": 3110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 3110002,
    "name": "School Of Wavecrest Eels",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfWavecrestEel",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfWavecrestEel",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 3110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 3110003,
    "name": "Frenzied School Of Wavecrest Eels",
    "description": "",
    "flattenable": false,
    "max_health": 137100,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfWavecrestEel",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfWavecrestEel",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 3110004,
    "name": "Pearlback Snail",
    "description": "",
    "flattenable": false,
    "max_health": 300,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PearlbackSnail",
    "icon_asset_name": "GeneratedIcons/Other/PearlbackSnail",
    "on_destroy_yield": [
      {
        "item_id": 3110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 4010011,
    "name": "Planted Cypress Sapling",
    "description": "",
    "flattenable": false,
    "max_health": 30,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/TreeSpruceSapling",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeSapling",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sapling",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4011011,
    "name": "Planted Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 3.0,
    "model_asset_name": "Resources/CypressTreeYoung",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeYoung",
    "on_destroy_yield": [
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4012011,
    "name": "Fully Grown Cypress Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/CypressTreeMature",
    "icon_asset_name": "GeneratedIcons/Other/CypressTreeMature",
    "on_destroy_yield": [
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050000,
    "name": "Garden Pillar",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenPillarA",
    "icon_asset_name": "GeneratedIcons/Other/GardenPillarA",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050001,
    "name": "Garden Formation",
    "description": "",
    "flattenable": false,
    "max_health": 7725,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenFormation",
    "icon_asset_name": "GeneratedIcons/Other/GardenFormation",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050002,
    "name": "Rocky Garden Pillar",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenPillarB",
    "icon_asset_name": "GeneratedIcons/Other/GardenPillarB",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050003,
    "name": "Rocky Garden Pillars",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenPillarC",
    "icon_asset_name": "GeneratedIcons/Other/GardenPillarC",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050004,
    "name": "Rocky Garden Formation",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenPillarD",
    "icon_asset_name": "GeneratedIcons/Other/GardenPillarD",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050005,
    "name": "Diorite Pillar",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DioritePillar",
    "icon_asset_name": "GeneratedIcons/Other/DioritePillar",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 5050002,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050006,
    "name": "Large Rocky Garden Pillars",
    "description": "",
    "flattenable": false,
    "max_health": 7725,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeRockyGardenPillars",
    "icon_asset_name": "GeneratedIcons/Other/LargeRockyGardenPillars",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4050007,
    "name": "Large Rocky Garden Formations",
    "description": "",
    "flattenable": false,
    "max_health": 7725,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/LargeGardenFormation",
    "icon_asset_name": "GeneratedIcons/Other/LargeGardenFormation",
    "on_destroy_yield": [
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4110000,
    "name": "Pygmy Lobsters",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfSilverfinBass",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT4",
    "on_destroy_yield": [
      {
        "item_id": 4110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4110001,
    "name": "School Of Mossfin Chub",
    "description": "",
    "flattenable": false,
    "max_health": 4635,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfMossfinChub",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfMossfinChub",
    "on_destroy_yield": [
      {
        "item_id": 4110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4110002,
    "name": "School Of Seastorm Tuna",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfSeastormTuna",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfSeastormTuna",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 4110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4110003,
    "name": "Frenzied School Of Seastorm Tuna",
    "description": "",
    "flattenable": false,
    "max_health": 154470,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfSeastormTuna",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfSeastormTuna",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 4110004,
    "name": "Crystal Shell Scallop",
    "description": "",
    "flattenable": false,
    "max_health": 400,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/CrystalShellScallop",
    "icon_asset_name": "GeneratedIcons/Other/CrystalShellScallop",
    "on_destroy_yield": [
      {
        "item_id": 4110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5045122,
    "name": "School Of Tidebreaker Barracuda",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Oceanfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 826362353,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5050000,
    "name": "Garden Pillar Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenPillarInterior",
    "icon_asset_name": "GeneratedIcons/Other/GardenPillarInterior",
    "on_destroy_yield": [
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5050001,
    "name": "Garden Formation Interior",
    "description": "",
    "flattenable": false,
    "max_health": 8560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GardenFormationInterior",
    "icon_asset_name": "GeneratedIcons/Other/GardenFormationInterior",
    "on_destroy_yield": [
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5050002,
    "name": "Diorite Pillar Interior",
    "description": "",
    "flattenable": false,
    "max_health": 8560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DioritePillarInterior",
    "icon_asset_name": "GeneratedIcons/Other/DioritePillarInterior",
    "on_destroy_yield": [
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 2005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5110000,
    "name": "Golden Crawfish",
    "description": "",
    "flattenable": false,
    "max_health": 2570,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfMoonlitTrout",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT5",
    "on_destroy_yield": [
      {
        "item_id": 5110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5110001,
    "name": "School Of Emberscale Sturgeon",
    "description": "",
    "flattenable": false,
    "max_health": 5135,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfEmberscaleSturgeon",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfEmberscaleSturgeon",
    "on_destroy_yield": [
      {
        "item_id": 5110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5110002,
    "name": "School Of Azure Sharks",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfAzureSharks",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAzureSharks",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 5110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5110003,
    "name": "Frenzied School Of Azure Sharks",
    "description": "",
    "flattenable": false,
    "max_health": 171230,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfAzureSharks",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAzureSharks",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 5110004,
    "name": "Armored Reef Clam",
    "description": "",
    "flattenable": false,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ArmoredReefClam",
    "icon_asset_name": "GeneratedIcons/Other/ArmoredReefClam",
    "on_destroy_yield": [
      {
        "item_id": 5110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 6110000,
    "name": "Sunrise Shrimp",
    "description": "",
    "flattenable": false,
    "max_health": 2810,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfGhostfinPike",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT6",
    "on_destroy_yield": [
      {
        "item_id": 6110016,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 6110001,
    "name": "School Of Hexfin Perch",
    "description": "",
    "flattenable": false,
    "max_health": 5625,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfHexfinPerch",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfHexfinPerch",
    "on_destroy_yield": [
      {
        "item_id": 6110017,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 6110002,
    "name": "School Of Abyssal Swordfish",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/SchoolOfAbyssalSwordfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 6110003,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 6110003,
    "name": "Frenzied School Of Abyssal Swordfish",
    "description": "",
    "flattenable": false,
    "max_health": 187480,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfAbyssalSwordfish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 6110004,
    "name": "Abyssal Oyster",
    "description": "",
    "flattenable": false,
    "max_health": 600,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AbyssalOyster",
    "icon_asset_name": "GeneratedIcons/Other/AbyssalOyster",
    "on_destroy_yield": [
      {
        "item_id": 6110011,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 6,
    "tag": "Mollusks",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 20400246,
    "name": "Umbracite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT9SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 20857160,
    "name": "Celestium Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 6560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT8LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 2140754992,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 49710228,
    "name": "Luminite Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT5LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 64125498,
    "name": "Umbracite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT9SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 20400246,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 70663203,
    "name": "Tier 10 Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MarbleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/MarbleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 71559749,
    "name": "Celestium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT8SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 93152192,
    "name": "Flawless Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 250,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HieroglyphsT10",
    "icon_asset_name": "GeneratedIcons/Other/PeerlessHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 1794492607,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 134935169,
    "name": "Pyrelite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT2SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 139483458,
    "name": "Aurumite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT7Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 152428426,
    "name": "Medium Ferralith Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT1MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 182331452,
    "name": "Traveler's Fruit",
    "description": "",
    "flattenable": false,
    "max_health": 5,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TravelersFruit",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/TravelersFruit",
    "on_destroy_yield": [
      {
        "item_id": 1818418717,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 1283632905,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Wonder Resource",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": true
  },
  {
    "id": 189403270,
    "name": "Tier 9 Fibers",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientThorns",
    "icon_asset_name": "GeneratedIcons/Other/AncientThorns",
    "on_destroy_yield": [
      {
        "item_id": 343539652,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 198759779,
    "name": "Emarium Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4115,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT3LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1064484466,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 204021372,
    "name": "Rough Sand Pile",
    "description": "",
    "flattenable": false,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RoughSandPile",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 205387239,
    "name": "Medium Elenvar Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT4MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 218270468,
    "name": "Ferralith Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 474230316,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 246146358,
    "name": "Rathium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT6SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 284200468,
    "name": "Tier 9 Flower",
    "description": "",
    "flattenable": true,
    "max_health": 1170,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KingOfTheAlps",
    "icon_asset_name": "GeneratedIcons/Other/KingOfTheAlps",
    "on_destroy_yield": [
      {
        "item_id": 1359045035,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 322711580,
    "name": "Faint Hexite Energy Font",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/InvisibleTowerResource",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/HeartPowerSource",
    "on_destroy_yield": [
      {
        "item_id": 1454954372,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 322711580,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 1,
    "tag": "Energy Font",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 331687458,
    "name": "Magnificient Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 235,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HieroglyphsT9",
    "icon_asset_name": "GeneratedIcons/Other/PeerlessHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 50901979,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 368570220,
    "name": "Cranberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T6Berry",
    "icon_asset_name": "GeneratedIcons/Other/BushBlackberry",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 370078223,
    "name": "Astralite Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 7455,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT10LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1526350171,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 374159821,
    "name": "School Of Flawless Lakefish",
    "description": "",
    "flattenable": false,
    "max_health": 7455,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Lakefish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfHexfinPerch",
    "on_destroy_yield": [
      {
        "item_id": 426552137,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 379219978,
    "name": "Medium Emarium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2740,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT3MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 986344159,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 387666932,
    "name": "Tier 7 Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3050,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1872489539,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 411376268,
    "name": "Aurumite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT7SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 424796674,
    "name": "School Of Flawless Ocean Fish",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Oceanfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1006230316,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 457752715,
    "name": "Pristine Sand",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/PristineSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 8,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 464034838,
    "name": "Olivine Sand",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/OlivineSandPile",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 2,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 473828668,
    "name": "Bamboo",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Bush",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/Bamboo",
    "on_destroy_yield": [
      {
        "item_id": 587697308,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 474230316,
    "name": "Ferralith Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 479638263,
    "name": "Tier 8 Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MarbleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/MarbleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 505488132,
    "name": "Pristine Clay",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourcesSharedClayT8",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT8",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 8,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 509854054,
    "name": "Frenzied School Of Mysterious Anglerfish",
    "description": "",
    "flattenable": false,
    "max_health": 218700,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8FrenziedOceanfish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 532077242,
    "name": "Indigo Milk Cap",
    "description": "",
    "flattenable": true,
    "max_health": 310,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T4Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT4",
    "on_destroy_yield": [
      {
        "item_id": 4130002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 4,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 541862086,
    "name": "Garnet Sand",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/GarnetSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 4,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 549538391,
    "name": "Medium Luminite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 3425,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT5MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1126774401,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 562432497,
    "name": "Magnificient Sand",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MagnificentSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 9,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 582591086,
    "name": "Ornate Berry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 610,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MistberryBush",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 586543849,
    "name": "Ornate Mushroom",
    "description": "",
    "flattenable": true,
    "max_health": 405,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT7",
    "on_destroy_yield": [
      {
        "item_id": 1188640605,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 642972236,
    "name": "Luminite Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 5135,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT5LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 49710228,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 650019671,
    "name": "Medium Celestium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT8MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 699727318,
    "name": "Medium Pyrelite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2380,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT2MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1842369948,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 702104027,
    "name": "Clay Termite Mound",
    "description": "",
    "flattenable": false,
    "max_health": 4000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TermiteClay",
    "icon_asset_name": "GeneratedIcons/Other/BentoniteClay",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 715451185,
    "name": "Blueberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 5000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BlueberryBush",
    "icon_asset_name": "GeneratedIcons/Other/JuniperBerryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 7200.0,
    "not_respawning": false
  },
  {
    "id": 722506673,
    "name": "School Of Rainbowscaled Tilapia",
    "description": "",
    "flattenable": false,
    "max_health": 6560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8Lakefish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfHexfinPerch",
    "on_destroy_yield": [
      {
        "item_id": 126302392,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 723013812,
    "name": "Tier 7 Flower",
    "description": "",
    "flattenable": true,
    "max_health": 1015,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KingOfTheAlps",
    "icon_asset_name": "GeneratedIcons/Other/KingOfTheAlps",
    "on_destroy_yield": [
      {
        "item_id": 418805707,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 746946997,
    "name": "Hexite Energy Font",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/InvisibleTowerResource",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/HeartPowerSource",
    "on_destroy_yield": [
      {
        "item_id": 255350911,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 746946997,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Energy Font",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 749656892,
    "name": "Medium Umbracite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT9MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 750444302,
    "name": "Medium Rathium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT6MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 756579517,
    "name": "Magnificient Baitfish",
    "description": "",
    "flattenable": false,
    "max_health": 3505,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Baitfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT6",
    "on_destroy_yield": [
      {
        "item_id": 1147002521,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 762731569,
    "name": "Palmetto",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Palmetto",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/Palmetto",
    "on_destroy_yield": [
      {
        "item_id": 1440938837,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 763946195,
    "name": "TEST BirdSpawn",
    "description": "",
    "flattenable": false,
    "max_health": 10,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/BushPlain",
    "icon_asset_name": "GeneratedIcons/Other/Bush",
    "on_destroy_yield": [
      {
        "item_id": 11001,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 500,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Stick",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [
      1473991888
    ],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 773149133,
    "name": "Medium Rathium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 3750,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT6MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 750444302,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 782933576,
    "name": "Elenvar Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4635,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT4LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1709170104,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 789563787,
    "name": "Strong Hexite Energy Font",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/InvisibleTowerResource",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/HeartPowerSource",
    "on_destroy_yield": [
      {
        "item_id": 2096381372,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 789563787,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Energy Font",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 806722041,
    "name": "Elenvar Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT4SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 814703516,
    "name": "Umbracite Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 7015,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT9LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1241355606,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 826362353,
    "name": "Frenzied School Of Tidebreaker Barracuda",
    "description": "",
    "flattenable": false,
    "max_health": 203285,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FrenziedSchoolOfAbyssalSwordfish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 834195042,
    "name": "Ornate Clay",
    "description": "",
    "flattenable": false,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourcesSharedClayT7",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT7",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 7,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 875245395,
    "name": "Mistberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T6Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 887736443,
    "name": "Luminite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT5SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [
      {
        "item_id": 3004,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1365934955,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 904022325,
    "name": "School Of Speedy Glowfin",
    "description": "",
    "flattenable": false,
    "max_health": 6100,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Lakefish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfHexfinPerch",
    "on_destroy_yield": [
      {
        "item_id": 750073180,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 916586661,
    "name": "Rathium Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 5625,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT6LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1318826480,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 932989637,
    "name": "Powerful Hexite Energy Font",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/InvisibleTowerResource",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/HeartPowerSource",
    "on_destroy_yield": [
      {
        "item_id": 162370266,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 932989637,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Energy Font",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 939382648,
    "name": "Wisteria Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3730,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WisteriaTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1885212129,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 939701809,
    "name": "Gigantic Sapwood Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3505,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TreeSapwoodLarge",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 827937528,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -12,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -11,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -10,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -9,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -8,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -7,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -7,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -8,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -9,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -10,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -9,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -8,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": -5,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -6,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 4,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 963451338,
    "name": "Magnificient Berry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 700,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 986344159,
    "name": "Medium Emarium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT3MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 999376882,
    "name": "Desert Sand",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DesertSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 6,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1005142992,
    "name": "Elephant Fibers",
    "description": "",
    "flattenable": true,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ElephantEar",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ElephantEar",
    "on_destroy_yield": [
      {
        "item_id": 1632765422,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 5,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1006230316,
    "name": "Frenzied School Of Flawless Ocean Fish",
    "description": "",
    "flattenable": false,
    "max_health": 248535,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10FrenziedOceanfish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1023127595,
    "name": "Flawless Clay",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourcesSharedClayT10",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT10",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 10,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1045808810,
    "name": "Pyrelite Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 3570,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT2LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1828992183,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1064484466,
    "name": "Emarium Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT3LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1072537375,
    "name": "Russala",
    "description": "",
    "flattenable": true,
    "max_health": 275,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T3Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT3",
    "on_destroy_yield": [
      {
        "item_id": 3130002,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 3,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 10800.0,
    "not_respawning": false
  },
  {
    "id": 1077990023,
    "name": "Elenvar Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT4SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [
      {
        "item_id": 3003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 806722041,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1101060328,
    "name": "Ficus Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3280,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FicusTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 826930059,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1113640469,
    "name": "Tier 9 Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 11690,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT9",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT9",
    "on_destroy_yield": [
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1125409070,
    "name": "Tier 8 Fibers",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientThorns",
    "icon_asset_name": "GeneratedIcons/Other/AncientThorns",
    "on_destroy_yield": [
      {
        "item_id": 1558771097,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1126774401,
    "name": "Medium Luminite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT5MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1141184831,
    "name": "Frenzied School Of Magnificient Ocean Fish",
    "description": "",
    "flattenable": false,
    "max_health": 233775,
    "ignore_damage": true,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9FrenziedOceanfish",
    "icon_asset_name": "GeneratedIcons/Other/FrenziedSchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Chummed Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1157887989,
    "name": "School Of Magnificient Lake Fish",
    "description": "",
    "flattenable": false,
    "max_health": 7015,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Lakefish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfHexfinPerch",
    "on_destroy_yield": [
      {
        "item_id": 1831764501,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Lake Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1159270109,
    "name": "Tier 10 Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3730,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1885212129,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1162923141,
    "name": "Celestium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT8SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 71559749,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1171246287,
    "name": "Medium Aurumite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT7MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1180909566,
    "name": "Crystalized Sand",
    "description": "",
    "flattenable": false,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/CrystalizedSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 3,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1241355606,
    "name": "Umbracite Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT9LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1262898141,
    "name": "Misty Crustacean",
    "description": "",
    "flattenable": false,
    "max_health": 3050,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Baitfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT6",
    "on_destroy_yield": [
      {
        "item_id": 297634455,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 7,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1264935363,
    "name": "Tier 8 Flower",
    "description": "",
    "flattenable": true,
    "max_health": 1095,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KingOfTheAlps",
    "icon_asset_name": "GeneratedIcons/Other/KingOfTheAlps",
    "on_destroy_yield": [
      {
        "item_id": 1935440864,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1283632905,
    "name": "Traveler's Fruit (Depleted)",
    "description": "",
    "flattenable": false,
    "max_health": 5,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/DepletedResource",
    "icon_asset_name": "GeneratedIcons/Other/PricklyPear",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Wonder Resource",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": true
  },
  {
    "id": 1283711960,
    "name": "Flawless Baitfish",
    "description": "",
    "flattenable": false,
    "max_health": 3730,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Baitfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT6",
    "on_destroy_yield": [
      {
        "item_id": 94044442,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1303955933,
    "name": "Traveler's Tree",
    "description": "",
    "flattenable": false,
    "max_health": 20,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1818418717,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 1435874592,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Wonder Resource",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": true
  },
  {
    "id": 1318826480,
    "name": "Rathium Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT6LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1332535555,
    "name": "Ornate Sand",
    "description": "",
    "flattenable": false,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/OrnateSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 7,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1332797261,
    "name": "Celestium Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT8Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [
      {
        "item_id": 76399881,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1333270269,
    "name": "Flawless Sand",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/FlawlessSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 10,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1357154092,
    "name": "Astralite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT10SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1365934955,
    "name": "Luminite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT5SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT5",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 5,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1384946093,
    "name": "Medium Umbracite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4675,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT9MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 749656892,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1386735112,
    "name": "Umbracite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT9Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT9",
    "on_destroy_yield": [
      {
        "item_id": 954664564,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1423928615,
    "name": "Tier 8 Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 10935,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT8",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT8",
    "on_destroy_yield": [
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 58757068,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1435874592,
    "name": "Traveler's Tree (Depleted)",
    "description": "",
    "flattenable": false,
    "max_health": 20,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientBaobabTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1818418717,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Wonder Resource",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": true
  },
  {
    "id": 1440062914,
    "name": "Tier 7 Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MarbleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/MarbleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1444297495,
    "name": "Medium Astralite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT10MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1452484871,
    "name": "Medium Astralite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4970,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT10MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1444297495,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1458811602,
    "name": "Seaweed",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Seaweed",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/Seaweed",
    "on_destroy_yield": [
      {
        "item_id": 343539652,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 9,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1467799531,
    "name": "Dewberry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 745,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1489491467,
    "name": "Tier 10 Fibers",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientThorns",
    "icon_asset_name": "GeneratedIcons/Other/AncientThorns",
    "on_destroy_yield": [
      {
        "item_id": 587697308,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1526038154,
    "name": "Magnificient Clay",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourcesSharedClayT9",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/ClayT9",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 9,
    "tag": "Clay",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1526350171,
    "name": "Astralite Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT10LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1558728865,
    "name": "Sparkling Prawn",
    "description": "",
    "flattenable": false,
    "max_health": 3280,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8Baitfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfShrimpT6",
    "on_destroy_yield": [
      {
        "item_id": 540806596,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Baitfish",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1565420196,
    "name": "Medium Ferralith Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT1MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 152428426,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1566846336,
    "name": "Rosewood Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2315,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/RosewoodTree",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 1003,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1567694896,
    "name": "Pristine Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 220,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HieroglyphsT8",
    "icon_asset_name": "GeneratedIcons/Other/PeerlessHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 1723948353,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1574437474,
    "name": "Sapwood Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3505,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TreeSapwoodSmall",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 827937528,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1579330042,
    "name": "Yellow Apricot Bush",
    "description": "",
    "flattenable": true,
    "max_health": 610,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T7Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1592739620,
    "name": "Pristine Berry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 655,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MistberryBush",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1606770008,
    "name": "Astralite Vein",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT10Small",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1619369727,
    "name": "Pyrelite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1190,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT2SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [
      {
        "item_id": 3001,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 134935169,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1637125903,
    "name": "Flawless Mushroom",
    "description": "",
    "flattenable": true,
    "max_health": 495,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT10",
    "on_destroy_yield": [
      {
        "item_id": 699985609,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1657885116,
    "name": "Pristine Mushroom",
    "description": "",
    "flattenable": true,
    "max_health": 435,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T8Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT8",
    "on_destroy_yield": [
      {
        "item_id": 121211472,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 8,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1673056013,
    "name": "Terrified Adventurer's Note",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AdventurersNote",
    "icon_asset_name": "Resources/SchoolOfMuckfin",
    "on_destroy_yield": [
      {
        "item_id": 2103452115,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 1673056013,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 2,
    "tag": "Note",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1689263994,
    "name": "Aurumite Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT7LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1691492474,
    "name": "Coral Sand",
    "description": "",
    "flattenable": false,
    "max_health": 1710,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/CoralSand",
    "icon_asset_name": "GeneratedIcons/Other/MudMound",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Walkable"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Walkable"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Walkable"
      }
    ],
    "tier": 5,
    "tag": "Sand",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1709170104,
    "name": "Elenvar Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT4LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1731709368,
    "name": "Overwhelming Hexite Energy Font",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/InvisibleTowerResource",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/HeartPowerSource",
    "on_destroy_yield": [
      {
        "item_id": 423184559,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 1731709368,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Energy Font",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1742959882,
    "name": "Magnificient Mushroom",
    "description": "",
    "flattenable": true,
    "max_health": 470,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT9",
    "on_destroy_yield": [
      {
        "item_id": 892842742,
        "quantity": 3,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 1747556974,
    "name": "Astralite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2485,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT10SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT10",
    "on_destroy_yield": [
      {
        "item_id": 1052901724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1357154092,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1800013378,
    "name": "Medium Aurumite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4375,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT7MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1171246287,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1812221896,
    "name": "School Of Magnificient Ocean Fish",
    "description": "",
    "flattenable": false,
    "max_health": 1,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Oceanfish",
    "icon_asset_name": "GeneratedIcons/Other/SchoolOfAbyssalSwordfish",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 1141184831,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "WalkableResource"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "WalkableResource"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 9,
    "tag": "Ocean Fish School",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1821415333,
    "name": "Mature Sapwood Tree",
    "description": "",
    "flattenable": false,
    "max_health": 3505,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/TreeSapwoodMedium",
    "icon_asset_name": "GeneratedIcons/Other/BaobabTreeAncient",
    "on_destroy_yield": [
      {
        "item_id": 827937528,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -8,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -7,
        "footprint_type": "Hitbox"
      },
      {
        "x": 9,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -5,
        "footprint_type": "Hitbox"
      },
      {
        "x": 8,
        "z": -6,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 7,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 4,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 5,
        "z": -4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 6,
        "z": -5,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Tree",
    "rarity": "Rare",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1828992183,
    "name": "Pyrelite Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT2LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -4,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1842369948,
    "name": "Medium Pyrelite Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 6000,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT2MedInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT2",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 2,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1902966974,
    "name": "Tier 9 Boulder",
    "description": "",
    "flattenable": false,
    "max_health": 2340,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/MarbleBoulder",
    "icon_asset_name": "GeneratedIcons/Other/MarbleBoulder",
    "on_destroy_yield": [
      {
        "item_id": 1173828253,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Rock Boulder",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1908426535,
    "name": "Windswept Tree",
    "description": "",
    "flattenable": false,
    "max_health": 2055,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WindsweptTree",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 1002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 4,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Tree",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 1800.0,
    "not_respawning": false
  },
  {
    "id": 1917261269,
    "name": "Jute",
    "description": "",
    "flattenable": false,
    "max_health": 1545,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/Jute",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/Jute",
    "on_destroy_yield": [
      {
        "item_id": 442004724,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1917744937,
    "name": "Ferralith Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1954847232,
    "name": "Black Fig Bush",
    "description": "",
    "flattenable": true,
    "max_health": 700,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T9Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 9,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1962517199,
    "name": "Ferralith Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT1SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT1",
    "on_destroy_yield": [
      {
        "item_id": 3000,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1917744937,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 1,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 1981854097,
    "name": "Tier 7 Fibers",
    "description": "",
    "flattenable": false,
    "max_health": 2035,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/AncientThorns",
    "icon_asset_name": "GeneratedIcons/Other/AncientThorns",
    "on_destroy_yield": [
      {
        "item_id": 1743603212,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Fiber Plant",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1986100626,
    "name": "Tier 10 Flower",
    "description": "",
    "flattenable": true,
    "max_health": 1245,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/KingOfTheAlps",
    "icon_asset_name": "GeneratedIcons/Other/KingOfTheAlps",
    "on_destroy_yield": [
      {
        "item_id": 1879591029,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 1996631377,
    "name": "Tier 10 Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 12425,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT10",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT10",
    "on_destroy_yield": [
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1170732802,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2025189123,
    "name": "Medium Celestium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 4375,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT8MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 650019671,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2027405944,
    "name": "Rathium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1875,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT6SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT6",
    "on_destroy_yield": [
      {
        "item_id": 3005,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 246146358,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 6,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2031243337,
    "name": "Aurumite Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 2185,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT7SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 411376268,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2066552867,
    "name": "Medium Elenvar Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 3090,
    "ignore_damage": false,
    "despawn_time": 2.0,
    "model_asset_name": "Resources/ResourceSharedOreT4MedInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT4",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 205387239,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 4,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2068688558,
    "name": "Emarium Vein Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT3SmallInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2072988001,
    "name": "Emarium Vein Interior",
    "description": "",
    "flattenable": false,
    "max_health": 1370,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT3SmallInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT3",
    "on_destroy_yield": [
      {
        "item_id": 3002,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 2068688558,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 3,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2073862342,
    "name": "Aurumite Outcrop Interior",
    "description": "",
    "flattenable": false,
    "max_health": 6560,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT7LargeInterior",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT7",
    "on_destroy_yield": [
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1954280449,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 1689263994,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2089197796,
    "name": "Enoki",
    "description": "",
    "flattenable": true,
    "max_health": 495,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Mushroom",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/MushroomT10",
    "on_destroy_yield": [
      {
        "item_id": 699985609,
        "quantity": 5,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 10,
    "tag": "Mushroom",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2104975743,
    "name": "Tier 7 Outcrop",
    "description": "",
    "flattenable": false,
    "max_health": 35000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/resourcesSharedStoneT7",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OutcropT7",
    "on_destroy_yield": [
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      },
      {
        "item_id": 1143621247,
        "quantity": 1,
        "item_type": "Cargo",
        "durability": null
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 3,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Rock Outcrop",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2110330714,
    "name": "Flawless Berry Bush",
    "description": "",
    "flattenable": true,
    "max_health": 745,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/T10Berry",
    "icon_asset_name": "GeneratedIcons/Other/MistberryBush",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 10,
    "tag": "Berry",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 2124845482,
    "name": "Ornate Hieroglyphs",
    "description": "",
    "flattenable": false,
    "max_health": 205,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/HieroglyphsT7",
    "icon_asset_name": "GeneratedIcons/Other/PeerlessHieroglyphs",
    "on_destroy_yield": [
      {
        "item_id": 518969403,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 7,
    "tag": "Research",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 0.0,
    "not_respawning": false
  },
  {
    "id": 2140754992,
    "name": "Celestium Outcrop Interior Depleted",
    "description": "",
    "flattenable": false,
    "max_health": 10000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/ResourceSharedOreT8LargeInteriorDepleted",
    "icon_asset_name": "GeneratedIcons/Other/GeneratedIcons/Other/OreVeinT8",
    "on_destroy_yield": [],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 1,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": 1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": 2,
        "z": -1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -3,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 0,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": 8,
    "tag": "Ore Vein",
    "rarity": "Common",
    "compendium_entry": false,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": true
  },
  {
    "id": 2144918116,
    "name": "Daisy",
    "description": "",
    "flattenable": true,
    "max_health": 500,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/WildDaisies",
    "icon_asset_name": "GeneratedIcons/Other/Daisy",
    "on_destroy_yield": [
      {
        "item_id": 1130005,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "WalkableResource"
      }
    ],
    "tier": 1,
    "tag": "Flower",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [],
    "scheduled_respawn_time": 600.0,
    "not_respawning": false
  },
  {
    "id": 2145270439,
    "name": "Jakyl Den",
    "description": "",
    "flattenable": false,
    "max_health": 2000,
    "ignore_damage": false,
    "despawn_time": 0.0,
    "model_asset_name": "Resources/JakylDen",
    "icon_asset_name": "",
    "on_destroy_yield": [
      {
        "item_id": 225094001,
        "quantity": 1,
        "item_type": "Item",
        "durability": 0
      },
      {
        "item_id": 767727086,
        "quantity": 2,
        "item_type": "Item",
        "durability": 0
      }
    ],
    "on_destroy_yield_resource_id": 0,
    "spawn_priority": 0,
    "footprint": [
      {
        "x": 0,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 0,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": -1,
        "z": 2,
        "footprint_type": "Hitbox"
      },
      {
        "x": 0,
        "z": 1,
        "footprint_type": "Hitbox"
      },
      {
        "x": -2,
        "z": 1,
        "footprint_type": "Walkable"
      },
      {
        "x": -2,
        "z": 3,
        "footprint_type": "Hitbox"
      }
    ],
    "tier": -1,
    "tag": "Monster Den",
    "rarity": "Common",
    "compendium_entry": true,
    "enemy_params_id": [
      121645569
    ],
    "scheduled_respawn_time": 43200.0,
    "not_respawning": false
  }];

const PLAYERS = ["Boz", "NotBoz", "Massive", "gon", "Toxx", "Toxxx"];
const PLAYER_IDS = {
  Boz: "576460752315731082",
  NotBoz: "216172782170234533",
  Massive: "576460752315732959",
  gon: "504403158276519614",
  Toxx: "432345564269488986",
  Toxxx: "288230376264038679",
};

const ALL_REGIONS = [1,2,3,4,5,6,7,8,9];

function Dropdown() {
  const [selectedPlayer, setSelectedPlayer] = useState("");
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedTier, setSelectedTier] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const selectedPlayerId = PLAYER_IDS[selectedPlayer] || "";

  const uniqueTags = Array.from(new Set(DATA.map(i => i.tag))).filter(Boolean);
  const uniqueTiers = Array.from(new Set(DATA.map(i => i.tier)))
    .filter(t => Number.isFinite(t) && t >= 0)
    .sort((a,b)=>a-b);

  const toggleRegion = (r) => {
    setFilteredItems([]); // invalidate old results
    setSelectedRegions(prev =>
      prev.includes(r) ? prev.filter(x => x !== r) : [...prev, r].sort((a,b)=>a-b)
    );
  };
  const selectAllRegions = () => { setSelectedRegions([...ALL_REGIONS]); setFilteredItems([]); };
  const clearRegions = () => { setSelectedRegions([]); setFilteredItems([]); };

  const handleFilter = () => {
    const res = DATA
      .filter(i => (!selectedTag || i.tag === selectedTag))
      .filter(i => (!selectedTier || i.tier === Number(selectedTier)))
      .filter(i => i.id && i.name);
    setFilteredItems(res);
  };

  return (
    <div>
      {/* Player */}
      <select
        className={Styles.select}
        value={selectedPlayer}
        onChange={(e) => {
          setSelectedPlayer(e.target.value);
          // reset downstream
          setSelectedTag("");
          setSelectedTier("");
          setFilteredItems([]);
        }}
      >
        <option value="" disabled>Select Player</option>
        {PLAYERS.map(p => <option key={p} value={p}>{p}</option>)}
      </select>

      {/* Regions (enabled after Player) */}
      <fieldset className={Styles.regionFieldset} disabled={!selectedPlayer}>
        <legend>Regions</legend>
        <div className={Styles.regionButtons}>
          <button type="button" onClick={selectAllRegions}>Select All</button>
          <button type="button" onClick={clearRegions}>Clear</button>
        </div>
        <div className={Styles.regionGrid}>
          {ALL_REGIONS.map(r => (
            <label key={r} className={Styles.regionItem}>
              <input
                type="checkbox"
                checked={selectedRegions.includes(r)}
                onChange={() => toggleRegion(r)}
              />
              <span>Region {r}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Tag (unlocks after Player) */}
      <select
        className={Styles.select}
        value={selectedTag}
        onChange={(e) => { setSelectedTag(e.target.value); setSelectedTier(""); setFilteredItems([]); }}
        disabled={!selectedPlayer}
      >
        <option value="">Select Resource</option>
        {uniqueTags.map(tag => <option key={tag} value={tag}>{tag}</option>)}
      </select>

      {/* Tier (unlocks after Tag) */}
      <select
        className={Styles.select}
        value={selectedTier}
        onChange={(e) => { setSelectedTier(e.target.value); setFilteredItems([]); }}
        disabled={!selectedTag}
      >
        <option value="">Select Tier</option>
        {uniqueTiers.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      {/* Button (unlocks after Tier) */}
      <button
        className={Styles.button}
        onClick={handleFilter}
        disabled={!selectedTier}
      >
        Filter Data
      </button>

      {/* Cards */}
      <div className={Styles.cards}>
        {filteredItems.map(item => (
          <Card
            key={item.id}
            id={item.id}
            name={item.name}
            tier={item.tier}
            playerId={selectedPlayerId}
            regions={selectedRegions}
          />
        ))}

        {/* Combined "All resources" */}
        {filteredItems.length > 1 && (
          <Card
            key="all-resources"
            id={filteredItems.map(i => i.id)}
            name="All resources"
            tier={null}
            playerId={selectedPlayerId}
            regions={selectedRegions}
          />
        )}
      </div>
    </div>
  );
}

export default Dropdown;