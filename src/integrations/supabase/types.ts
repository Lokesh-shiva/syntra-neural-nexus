export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      ai_insights: {
        Row: {
          alerts: string | null
          created_at: string | null
          emotional_support: string | null
          fertile_window_end: string | null
          fertile_window_start: string | null
          generated_date: string | null
          id: string
          lifestyle_suggestions: string | null
          next_period_prediction: string | null
          pms_window_end: string | null
          pms_window_start: string | null
          raw_response: string | null
          user_id: string
        }
        Insert: {
          alerts?: string | null
          created_at?: string | null
          emotional_support?: string | null
          fertile_window_end?: string | null
          fertile_window_start?: string | null
          generated_date?: string | null
          id?: string
          lifestyle_suggestions?: string | null
          next_period_prediction?: string | null
          pms_window_end?: string | null
          pms_window_start?: string | null
          raw_response?: string | null
          user_id: string
        }
        Update: {
          alerts?: string | null
          created_at?: string | null
          emotional_support?: string | null
          fertile_window_end?: string | null
          fertile_window_start?: string | null
          generated_date?: string | null
          id?: string
          lifestyle_suggestions?: string | null
          next_period_prediction?: string | null
          pms_window_end?: string | null
          pms_window_start?: string | null
          raw_response?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cycle_entries: {
        Row: {
          created_at: string | null
          energy_level: number | null
          entry_date: string
          flow_intensity: string | null
          id: string
          mood: string | null
          notes: string | null
          sleep_quality: number | null
          symptoms: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          energy_level?: number | null
          entry_date: string
          flow_intensity?: string | null
          id?: string
          mood?: string | null
          notes?: string | null
          sleep_quality?: number | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          energy_level?: number | null
          entry_date?: string
          flow_intensity?: string | null
          id?: string
          mood?: string | null
          notes?: string | null
          sleep_quality?: number | null
          symptoms?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      product_ingredients: {
        Row: {
          created_at: string | null
          id: string
          ingredient_name: string
          product_id: string | null
          risk_level: string
          risk_percentage: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          ingredient_name: string
          product_id?: string | null
          risk_level: string
          risk_percentage: number
        }
        Update: {
          created_at?: string | null
          id?: string
          ingredient_name?: string
          product_id?: string | null
          risk_level?: string
          risk_percentage?: number
        }
        Relationships: [
          {
            foreignKeyName: "product_ingredients_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "scanned_products"
            referencedColumns: ["id"]
          },
        ]
      }
      scanned_products: {
        Row: {
          created_at: string | null
          id: string
          image_url: string | null
          product_name: string | null
          product_type: string | null
          safety_level: string | null
          safety_score: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          product_name?: string | null
          product_type?: string | null
          safety_level?: string | null
          safety_score?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          image_url?: string | null
          product_name?: string | null
          product_type?: string | null
          safety_level?: string | null
          safety_score?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "scanned_products_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_allergies: {
        Row: {
          created_at: string | null
          id: string
          ingredient_name: string
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          ingredient_name: string
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          ingredient_name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_allergies_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_profiles: {
        Row: {
          common_symptoms: string[] | null
          created_at: string | null
          cycle_length: number | null
          diet_type: string | null
          enable_reminders: boolean | null
          exercise_frequency: string | null
          flow_type: string | null
          hormonal_condition: string | null
          id: string
          last_period_date: string | null
          mood_preferences: string[] | null
          onboarding_completed: boolean | null
          period_duration: number | null
          preferred_language: string | null
          skin_sensitivity: string | null
          stress_level: number | null
          theme_preference: string | null
          updated_at: string | null
          water_intake: number | null
        }
        Insert: {
          common_symptoms?: string[] | null
          created_at?: string | null
          cycle_length?: number | null
          diet_type?: string | null
          enable_reminders?: boolean | null
          exercise_frequency?: string | null
          flow_type?: string | null
          hormonal_condition?: string | null
          id: string
          last_period_date?: string | null
          mood_preferences?: string[] | null
          onboarding_completed?: boolean | null
          period_duration?: number | null
          preferred_language?: string | null
          skin_sensitivity?: string | null
          stress_level?: number | null
          theme_preference?: string | null
          updated_at?: string | null
          water_intake?: number | null
        }
        Update: {
          common_symptoms?: string[] | null
          created_at?: string | null
          cycle_length?: number | null
          diet_type?: string | null
          enable_reminders?: boolean | null
          exercise_frequency?: string | null
          flow_type?: string | null
          hormonal_condition?: string | null
          id?: string
          last_period_date?: string | null
          mood_preferences?: string[] | null
          onboarding_completed?: boolean | null
          period_duration?: number | null
          preferred_language?: string | null
          skin_sensitivity?: string | null
          stress_level?: number | null
          theme_preference?: string | null
          updated_at?: string | null
          water_intake?: number | null
        }
        Relationships: []
      }
      user_scan_history: {
        Row: {
          created_at: string | null
          id: string
          product_id: string | null
          product_name: string | null
          safety_score: number | null
          scan_date: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          product_name?: string | null
          safety_score?: number | null
          scan_date?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          product_id?: string | null
          product_name?: string | null
          safety_score?: number | null
          scan_date?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_scan_history_product_id_fkey"
            columns: ["product_id"]
            isOneToOne: false
            referencedRelation: "scanned_products"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          preferred_language: string | null
          skin_type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          id: string
          preferred_language?: string | null
          skin_type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          preferred_language?: string | null
          skin_type?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
