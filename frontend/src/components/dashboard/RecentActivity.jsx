import React from "react";
import { recentActivity } from "../../constants/chartData";
import { FiAlertCircle } from "react-icons/fi";

const RecentActivity = () => {
  return (
    <div
      className="rounded p-5 max-w-[330px] "
      style={{ background: "#FAF8F3", border: "1px solid rgba(13,13,13,0.08)" }}
    >
      <p
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#6B6560",
          margin: "0 0 16px",
        }}
      >
        Recent Activity
      </p>
      <div className="flex flex-col gap-1">
        {recentActivity.map((a, i) => (
          <div
            key={i}
            className="flex gap-3 py-2.5"
            style={{
              borderBottom:
                i < recentActivity.length - 1
                  ? "1px solid rgba(13,13,13,0.06)"
                  : "none",
            }}
          >
            <div
              className="flex items-center justify-center flex-shrink-0 rounded"
              style={{
                width: 28,
                height: 28,
                background:
                  a.type === "payment"
                    ? "#0D7A5F18"
                    : a.type === "task"
                      ? "#E84D1918"
                      : "rgba(13,13,13,0.06)",
              }}
            >
              <FiAlertCircle
                size={13}
                color={
                  a.type === "payment"
                    ? "#0D7A5F"
                    : a.type === "task"
                      ? "#E84D19"
                      : "#9B9690"
                }
              />
            </div>
            <div className="flex-1 min-w-0">
              <p style={{ fontSize: 12.5, fontWeight: 600, margin: "0 0 1px" }}>
                {a.action}
              </p>
              <p
                style={{
                  fontSize: 11.5,
                  color: "#6B6560",
                  margin: 0,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {a.detail}
              </p>
            </div>
            <span
              style={{
                fontSize: 11,
                color: "#9B9690",
                flexShrink: 0,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {a.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
