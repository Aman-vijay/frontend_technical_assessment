// draggableNode.js

export const DraggableNode = ({ type, label, icon: Icon, color = "blue" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const colorStyles = {
    blue: {
      background: 'linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))',
      border: '1px solid rgba(59, 130, 246, 0.5)'
    },
    green: {
      background: 'linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), rgba(16, 185, 129, 0.2))',
      border: '1px solid rgba(34, 197, 94, 0.5)'
    },
    orange: {
      background: 'linear-gradient(to bottom right, rgba(249, 115, 22, 0.2), rgba(239, 68, 68, 0.2))',
      border: '1px solid rgba(249, 115, 22, 0.5)'
    },
    purple: {
      background: 'linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
      border: '1px solid rgba(168, 85, 247, 0.5)'
    },
    teal: {
      background: 'linear-gradient(to bottom right, rgba(20, 184, 166, 0.2), rgba(6, 182, 212, 0.2))',
      border: '1px solid rgba(20, 184, 166, 0.5)'
    },
  };

  const currentColor = colorStyles[color] || colorStyles.blue;

  return (
    <div
      style={{
        cursor: 'grab',
        minWidth: '120px',
        height: '64px',
        padding: '12px 16px',
        background: currentColor.background,
        border: currentColor.border,
        borderRadius: '8px',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        transition: 'all 0.2s ease',
        position: 'relative'
      }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05) translateY(-4px)';
        e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1) translateY(0)';
        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
      }}
      draggable
    >
      {Icon && (
        <div style={{
          flexShrink: 0,
          width: '32px',
          height: '32px',
          borderRadius: '8px',
          background: 'rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.2s ease'
        }}>
          <Icon style={{ width: '16px', height: '16px', color: 'white' }} />
        </div>
      )}
      <span style={{
        fontSize: '14px',
        fontWeight: '500',
        color: 'white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}>{label}</span>
    </div>
  );
};